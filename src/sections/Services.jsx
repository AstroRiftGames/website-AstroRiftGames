// src/sections/Services.jsx
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.items.b2b.title'),
      description: t('services.items.b2b.description'),
      icon: "🎯",
      features: t('services.items.b2b.features')
    },
    {
      title: t('services.items.custom.title'),
      description: t('services.items.custom.description'),
      icon: "💻",
      features: t('services.items.custom.features')
    },
    {
      title: t('services.items.art.title'),
      description: t('services.items.art.description'),
      icon: "🎨",
      features: t('services.items.art.features')
    }
    // Eliminé la tarjeta de diseño de sonido
  ];

  return (
    <section id="services" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          {t('services.title')}
        </h2>
        <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
          {t('services.subtitle')}
        </p>
        
        {/* Cambié el grid a 3 columnas en lugar de 4 para que se vea mejor */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-orange-500/20 flex flex-col h-full min-h-[400px]"
            >
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              
              <div className="space-y-2 mt-auto">
                {service.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex}
                    className="flex items-center justify-center text-sm text-orange-400 bg-orange-500/10 rounded-full py-1 px-3"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
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
            {t('services.caseStudy.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('services.caseStudy.description')}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                  {t('services.caseStudy.metrics.engagement')}
                </span>
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                  {t('services.caseStudy.metrics.reach')}
                </span>
                <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                  {t('services.caseStudy.metrics.roi')}
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
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {t('services.cta')}
          </button>
        </div>
      </div>
    </section>
  )
}
  
export default Services