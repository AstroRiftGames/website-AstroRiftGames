import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('desarrolloTitle'),
      description: t('desarrolloText'),
      icon: "💻",
      features: [t('motorUnity'), t('programacionCS'), t('multiplataforma')]
    },
    {
      title: t('arteTitle'),
      description: t('arteText'),
      icon: "🎨",
      features: [t('arte2D'), t('disenoPersonajes'), t('disenoUI')]
    },
    {
      title: t('sonidoTitle'),
      description: t('sonidoText'),
      icon: "🎵",
      features: [t('efectosSonido'), t('composicionMusical'), t('implementacionAudio')]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          {t('serviciosTitle')}
        </h2>
        <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
          {t('serviciosSubtitle')}
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
            {t('solicitarCotizacion')}
          </button>
        </div>
      </div>
    </section>
  )
}
  
export default Services