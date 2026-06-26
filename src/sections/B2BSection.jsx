const B2BSection = () => {
  const benefits = [
    {
      icon: "📈",
      title: "Aumenta tu ROI",
      description: "Los juegos promocionales generan 3x más engagement que la publicidad tradicional"
    },
    {
      icon: "🎮",
      title: "Experiencia Memorable",
      description: "Crea una conexión emocional duradera con tus clientes a través del entretenimiento"
    },
    {
      icon: "📊",
      title: "Datos Valiosos",
      description: "Obtén insights únicos sobre el comportamiento y preferencias de tu audiencia"
    },
    {
      icon: "🌐",
      title: "Alcance Viral",
      description: "Los juegos se comparten naturalmente, amplificando tu mensaje de manera orgánica"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Análisis de Marca",
      description: "Estudiamos tu marca, objetivos y audiencia para diseñar la estrategia perfecta"
    },
    {
      step: "02",
      title: "Concepto Creativo",
      description: "Desarrollamos el concepto del juego alineado con tus valores y objetivos comerciales"
    },
    {
      step: "03",
      title: "Desarrollo Técnico",
      description: "Programamos en Unity con C# garantizando calidad y optimización multiplataforma"
    },
    {
      step: "04",
      title: "Launch & Analytics",
      description: "Lanzamos tu juego y te proporcionamos métricas detalladas para medir el impacto"
    }
  ];

  return (
    <section id="b2b" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            ¿Por qué Gamificar tu Marca?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Los videojuegos no son solo entretenimiento, son herramientas poderosas de marketing que generan engagement auténtico
          </p>
        </div>

        {/* Beneficios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 text-center hover:bg-gray-800 transition-all duration-300 border border-gray-700 hover:border-indigo-500"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Proceso */}
        <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Nuestro Proceso B2B
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                {/* Línea conectora */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform translate-x-4"></div>
                )}
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-8 border border-indigo-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para Gamificar tu Marca?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Conversemos sobre cómo un videojuego personalizado puede impulsar tu negocio y conectar con tu audiencia de manera única.
            </p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary"
            >
              Solicitar Consulta Gratuita
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default B2BSection