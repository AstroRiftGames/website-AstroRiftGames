const Services = () => {
  const services = [
    {
      title: "Desarrollo B2B",
      description: "Creamos videojuegos personalizados para empresas que buscan promocionar su marca de manera innovadora.",
      icon: "🎯",
      features: ["Juegos Mobile", "Juegos Web", "Branding Interactivo"]
    },
    {
      title: "Desarrollo a medida",
      description: "Creamos videojuegos desde cero, adaptados completamente a tus ideas y visión única.",
      icon: "💻",
      features: ["Motor Unity", "Programación C#", "Multiplataforma"]
    },
    {
      title: "Arte y animación",
      description: "Diseño visual único y animaciones fluidas que dan vida a cada proyecto.",
      icon: "🎨",
      features: ["Arte 2D", "Diseño de Personajes", "Diseño UI/UX"]
    },
    {
      title: "Diseño de sonido",
      description: "Ambientes inmersivos y banda sonora original que complementan la experiencia.",
      icon: "🎵",
      features: ["Efectos de Sonido", "Composición Musical", "Implementación de Audio"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Nuestros Servicios
        </h2>
        <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
          Ofrecemos soluciones completas para dar vida a tus ideas de videojuegos, desde proyectos independientes hasta estrategias comerciales B2B
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:scale-105 hover:shadow-indigo-500/20 flex flex-col h-full min-h-[400px]"
            >
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              
              <div className="space-y-2 mt-auto">
                {service.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex}
                    className="flex items-center justify-center text-sm text-indigo-400 bg-indigo-500/10 rounded-full py-1 px-3"
                  >
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Sección de caso de éxito */}
        <div className="mt-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-3xl font-bold mb-6 text-white">
            Caso de Éxito: Müecas Game
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <p className="text-gray-300 leading-relaxed mb-4">
                Desarrollamos un juego promocional que logró aumentar significativamente el engagement de la marca, 
                creando una conexión emocional única entre el producto y los consumidores.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                  +500% Engagement
                </span>
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                  Alcance Viral
                </span>
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                  ROI Positivo
                </span>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="/images/MuecasGameLogo.jpg" 
                alt="Müecas Game"
                className="w-48 h-48 object-cover rounded-xl mx-auto shadow-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Cotización
          </button>
        </div>
      </div>
    </section>
  )
}
  
export default Services