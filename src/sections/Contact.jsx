import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
      const autoReplyTemplateID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID; // Nueva variable
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Verificar que las variables estén cargadas
      if (!serviceID || !templateID || !publicKey) {
        throw new Error('Variables de EmailJS no configuradas correctamente');
      }

      // Parámetros que se envían al template
      const templateParams = {
        from_name: formData.nombre,
        from_email: formData.email,
        message: formData.mensaje,
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
          // No mostramos error al usuario, el email principal sí se envió
        }
      }

      setSubmitted(true);
      setFormData({ nombre: '', email: '', mensaje: '' });
      
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
      <div className="max-w-2xl mx-auto">
        {/* Formulario centrado */}
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
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">Envianos un Mensaje</h3>
                <p className="text-gray-400">¿Tenés una idea de juego? ¡Hablemos!</p>
              </div>
              
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
                  placeholder="Cuéntanos sobre tu proyecto, idea de juego o cómo podemos ayudarte..."
                ></textarea>
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
    </section>
  )
}
  
export default Contact