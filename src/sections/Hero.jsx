// src/sections/Hero.jsx
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen 
    bg-hero-pattern 
    bg-cover 
    bg-center 
    flex 
    flex-col 
    items-center 
    justify-center 
    text-center 
    text-white 
    px-4
    relative
    overflow-hidden">
      
      {/* YA NO NECESITAMOS PARTÍCULAS AQUÍ - Las globales se encargan */}
      
      <div className="relative z-10">
        {/* Imagen reemplazando el h1 - RUTA CORREGIDA */}
        <div className="mb-6">
          <img 
            src="/images/NOMBRE-ARG.png" 
            alt="Astro Rift Games"
            className="w-full max-w-4xl mx-auto h-auto drop-shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed text-center">
          {t('hero.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToAbout}
            className="btn btn-primary"
          >
            {t('hero.learnMore')}
          </button>
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-secondary"
          >
            <span>{t('hero.viewGames')}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero