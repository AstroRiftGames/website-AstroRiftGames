import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Toda la sección enmarcada */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-gray-700 hover:border-indigo-500 transition-all duration-300">
          <div className="md:flex items-center gap-12 text-white">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <img 
                  src="/images/arglogonamedown.png" 
                  alt="Logo de Astro Rift Games" 
                  className="w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300" 
                />
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                {t('aboutTitle')}
              </h2>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                <span className="text-indigo-400 font-semibold">Astro Rift Games</span> {t('aboutText1')}
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                {t('aboutText2')}
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                  <div className="text-2xl font-bold text-indigo-400">2+</div>
                  <div className="text-sm text-gray-400">{t('juegsPublicados')}</div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                  <div className="text-2xl font-bold text-indigo-400">100%</div>
                  <div className="text-sm text-gray-400">{t('pasion')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  
export default About