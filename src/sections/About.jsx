// src/sections/About.jsx
import { useLanguage } from '../contexts/LanguageContext';
import { SectionReveal } from '../components/Index';


const capabilityIcons = {
  games: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4.75 12.75c2.25-1 4.25-.8 6 .6 1.45 1.15 3.05 1.45 4.8.9 1.18-.36 2.42-.4 3.7-.1M8.25 6.2c.95.85 1.43 1.82 1.43 2.9 0 1.06-.38 2.05-1.13 2.98M15.7 4.85c-.7.9-1.03 1.86-.98 2.9.05 1.04.5 1.98 1.34 2.82" />
    </svg>
  ),
  code: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m8.25 8.5-3.5 3.5 3.5 3.5M15.75 8.5l3.5 3.5-3.5 3.5M13.25 5.75l-2.5 12.5" />
    </svg>
  ),
  support: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M7.25 12.25 9.7 9.8a3 3 0 0 1 4.24 0l.36.36a2.2 2.2 0 0 0 3.12 0l.83-.83" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="m5.75 10.75-2 2 4.5 4.5 2-2M18.25 10.75l2 2-4.5 4.5-2-2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9.25 15.75h5.5" />
    </svg>
  )
};

const About = () => {
  const { t, currentLanguage } = useLanguage();

  const capabilityBlocks = [
    {
      icon: capabilityIcons.games,
      title: t('about.capabilities.originalGames.title'),
      text: t('about.capabilities.originalGames.text')
    },
    {
      icon: capabilityIcons.code,
      title: t('about.capabilities.unity.title'),
      text: t('about.capabilities.unity.text')
    },
    {
      icon: capabilityIcons.support,
      title: t('about.capabilities.outsourcing.title'),
      text: t('about.capabilities.outsourcing.text')
    }
  ];

  const titleParts = currentLanguage === 'en'
    ? ['Indie games &', 'development support']
    : ['Juegos indie y', 'soporte de desarrollo'];

  const handleSectionLink = (event, href) => {
    event.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', href);
    }
  };

  return (
    <section id="about" className="py-20 md:py-24 px-4 overflow-hidden">
      <SectionReveal className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-10 items-start">
          <div className="lg:col-span-7 max-w-3xl">
            <div className="w-20 h-px bg-gradient-to-r from-indigo-400 to-transparent mb-5" />
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-400 mb-4">
               {t('about.eyebrow')}
            </p>

            <h2 className="max-w-[780px] text-4xl md:text-[2.55rem] lg:text-[2.8rem] font-bold leading-[1.08] text-white mb-6">
              <span className="block">{titleParts[0]}</span>
              <span className="block">{titleParts[1]}</span>
            </h2>

            <div className="space-y-4 text-base md:text-lg leading-8 text-gray-300/95 max-w-2xl">
              <p>{t('about.description1')}</p>
              <p>{t('about.description2')}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-7">
              <a
                href="#services"
                onClick={(event) => handleSectionLink(event, '#services')}
                className="btn btn-secondary"
              >
                <span>{t('about.ctaServices')}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(event) => handleSectionLink(event, '#contact')}
                className="btn btn-secondary"
              >
                <span>{t('about.ctaContact')}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-1">
            <div className="space-y-0">
              {capabilityBlocks.map((capability, index) => (
                <div key={capability.title}>
                  <div className="group grid grid-cols-[60px_1fr] gap-6 py-5 md:py-6">
                    <div className="relative mt-1 flex h-12 w-12 items-center justify-center text-indigo-200 transition-colors duration-300 group-hover:text-white">
                      <span className="absolute inset-0 border border-indigo-400/45 bg-indigo-500/10 rotate-45 transition-colors duration-300 group-hover:border-purple-400/75" />
                      <span className="relative z-10">{capability.icon}</span>
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2.5">
                        {capability.title}
                      </h3>
                      <p className="text-sm md:text-base leading-7 text-gray-300/90 max-w-xl">
                        {capability.text}
                      </p>
                    </div>
                  </div>

                  {index < capabilityBlocks.length - 1 && (
                    <div className="ml-[84px] h-px w-full max-w-[18rem] bg-gradient-to-r from-indigo-400/12 via-purple-400/8 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>

  );
};

export default About;