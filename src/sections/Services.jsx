const Services = () => {
  const services = [
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
        <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
          Ofrecemos soluciones completas para dar vida a tus ideas de videojuegos
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:scale-105 hover:shadow-indigo-500/20"
            >
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="space-y-2">
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
        
        <div className="mt-16">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Solicitar Cotización
          </button>
        </div>
      </div>
    </section>
  )
}
  
export default Services