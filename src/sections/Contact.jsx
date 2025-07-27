import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Tipos de archivo permitidos
  const allowedTypes = [
    'text/plain',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp'
  ];

  const maxFileSize = 10 * 1024 * 1024; // 10MB
  const maxFiles = 5;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Validar archivos
  const validateFiles = (fileList) => {
    const validFiles = [];
    const errors = [];

    Array.from(fileList).forEach((file) => {
      if (!allowedTypes.includes(file.type)) {
        errors.push(`${file.name}: Tipo de archivo no permitido`);
        return;
      }
      
      if (file.size > maxFileSize) {
        errors.push(`${file.name}: El archivo es muy grande (máximo 10MB)`);
        return;
      }
      
      validFiles.push(file);
    });

    if (files.length + validFiles.length > maxFiles) {
      errors.push(`Máximo ${maxFiles} archivos permitidos`);
      return { validFiles: [], errors };
    }

    return { validFiles, errors };
  };

  // Manejar drag and drop
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = e.dataTransfer.files;
    const { validFiles, errors } = validateFiles(droppedFiles);

    if (errors.length > 0) {
      setError(errors.join(', '));
      setTimeout(() => setError(null), 5000);
    }

    if (validFiles.length > 0) {
      setFiles(prev => [...prev, ...validFiles]);
    }
  };

  // Manejar selección de archivos
  const handleFileSelect = (e) => {
    const selectedFiles = e.target.files;
    const { validFiles, errors } = validateFiles(selectedFiles);

    if (errors.length > 0) {
      setError(errors.join(', '));
      setTimeout(() => setError(null), 5000);
    }

    if (validFiles.length > 0) {
      setFiles(prev => [...prev, ...validFiles]);
    }

    // Limpiar el input
    e.target.value = '';
  };

  // Remover archivo
  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  // Formatear tamaño de archivo
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Convertir archivos a base64 para EmailJS
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Variables de EmailJS
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const autoReplyTemplateID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Verificar que las variables estén cargadas
      if (!serviceID || !templateID || !publicKey) {
        throw new Error('Variables de EmailJS no configuradas correctamente');
      }

      // Convertir archivos a base64 si los hay
      let attachments = [];
      if (files.length > 0) {
        try {
          attachments = await Promise.all(
            files.map(async (file) => ({
              name: file.name,
              data: await fileToBase64(file),
              size: formatFileSize(file.size)
            }))
          );
        } catch (fileError) {
          console.error('Error procesando archivos:', fileError);
          setError('Error al procesar los archivos adjuntos');
          return;
        }
      }

      // Parámetros que se envían al template
      const templateParams = {
        from_name: formData.nombre,
        from_email: formData.email,
        message: formData.mensaje,
        attachments_count: files.length,
        attachments_info: attachments.map(att => `${att.name} (${att.size})`).join(', '),
      };

      console.log('Enviando emails...', templateParams);

      // 1. Enviar email principal (a tu casilla)
      const result1 = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log('✅ Email principal enviado:', result1);

      // 2. Enviar auto-reply (al usuario) - solo si tenemos el template configurado
      if (autoReplyTemplateID) {
        try {
          const result2 = await emailjs.send(
            serviceID,
            autoReplyTemplateID,
            templateParams,
            publicKey
          );
          console.log('✅ Auto-reply enviado:', result2);
        } catch (autoReplyError) {
          console.warn('⚠️ Error en auto-reply (email principal enviado correctamente):', autoReplyError);
        }
      }

      setSubmitted(true);
      setFormData({ nombre: '', email: '', mensaje: '' });
      setFiles([]);
      
      // Resetear el estado después de 5 segundos
      setTimeout(() => setSubmitted(false), 5000);

    } catch (error) {
      console.error('❌ Error al enviar email:', error);
      
      if (error.message.includes('Variables de EmailJS')) {
        setError('Error de configuración. Reinicia el servidor de desarrollo.');
      } else if (error.text && error.text.includes('Unauthorized')) {
        setError('Error de autorización. Verifica la configuración de EmailJS.');
      } else if (error.text) {
        setError(`Error del servicio: ${error.text}`);
      } else {
        setError('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Header principal de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Contacto
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ¿Tenés alguna consulta, propuesta o querés trabajar con nosotros? ¡Escribinos!
          </p>
        </div>

        {/* Formulario de contacto */}
        <div id="contact-form" className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado! 🚀</h3>
                <p className="text-gray-400 mb-2">Te responderemos pronto a tu casilla de email.</p>
                <p className="text-sm text-indigo-400">También enviamos una confirmación a tu email con los detalles.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {error && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-red-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-red-400 text-sm">{error}</p>
                    </div>
                  </div>
                )}
                
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-400 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-400 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 resize-none"
                    placeholder="Contanos tu consulta, propuesta, proyecto o cualquier cosa que quieras comentarnos..."
                  ></textarea>
                </div>

                {/* Zona de Drag and Drop - Destacada */}
                <div className="bg-gray-800/70 rounded-xl p-6 border border-gray-600">
                  <label className="block text-sm font-medium text-gray-400 mb-4 text-center">
                    📎 Archivos Adjuntos (Opcional)
                  </label>
                  
                  <div
                    className={`relative w-full border-2 border-dashed rounded-lg p-8 transition-all duration-200 ${
                      isDragging
                        ? 'border-indigo-500 bg-indigo-500/10'
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto text-gray-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-gray-300 text-lg mb-3">
                        Arrastrá tus archivos aquí o{' '}
                        <label className="text-indigo-400 cursor-pointer hover:text-indigo-300 underline underline-offset-2">
                          hacé clic para seleccionar
                          <input
                            type="file"
                            multiple
                            onChange={handleFileSelect}
                            accept=".txt,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.gif,.webp"
                            className="hidden"
                          />
                        </label>
                      </p>
                      <p className="text-sm text-gray-500">
                        PDFs, documentos, imágenes, referencias • Máximo {maxFiles} archivos • 10MB cada uno
                      </p>
                    </div>
                  </div>

                  {/* Lista de archivos seleccionados */}
                  {files.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="text-sm font-medium text-gray-400">Archivos seleccionados ({files.length}/{maxFiles}):</h4>
                      <div className="grid gap-3 md:grid-cols-2">
                        {files.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors">
                            <div className="flex items-center space-x-3 flex-1">
                              <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-white text-sm font-medium truncate">{file.name}</p>
                                <p className="text-gray-400 text-xs">{formatFileSize(file.size)}</p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-red-400 hover:text-red-300 transition-colors p-1 hover:bg-red-500/10 rounded flex-shrink-0 ml-2"
                              title="Remover archivo"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-indigo-500/25"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando mensaje...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <span>Enviar Mensaje</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
  
export default Contact