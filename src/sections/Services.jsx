// src/sections/Services.jsx
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      eyebrow: '01',
      title: t('services.items.advergames.title'),
      description: t('services.items.advergames.description')
    },
    {
      eyebrow: '02',
      title: t('services.items.custom.title'),
      description: t('services.items.custom.description')
    },
    {
      eyebrow: '03',
      title: t('services.items.production.title'),
      description: t('services.items.production.description')
    }
  ];

  const scrollToContact = (event) => {
    event.preventDefault();

    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', '#contact');
    }
  };

  return (
    <section id="services" className="py-20 md:py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto mb-4 md:mb-5">
          <div className="w-20 h-px bg-gradient-to-r from-indigo-400 to-transparent mb-5" />
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-400 mb-4">
            {t('services.eyebrow')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg md:text-xl leading-8 text-gray-300/90 max-w-xl">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="space-y-0 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={service.title}>
              <div className="grid grid-cols-1 md:grid-cols-[64px_minmax(0,4fr)_minmax(0,6fr)] gap-4 md:gap-6 py-5 md:py-6">
                <div className="flex items-start gap-2 md:pt-1">
                  <span className="mt-1 min-w-6 text-xs font-bold tracking-[0.16em] text-indigo-100/90">
                    {service.eyebrow}
                  </span>
                  <div className="hidden md:block h-px flex-1 max-w-4 bg-gradient-to-r from-indigo-400/22 to-transparent mt-3" />
                </div>

                <div>
                  <h3 className="max-w-[460px] text-2xl md:text-[1.55rem] lg:text-[1.68rem] font-bold leading-tight text-white">
                    {service.title}
                  </h3>
                </div>

                <div>
                  <p className="text-base leading-7 text-gray-300/90 max-w-xl">
                    {service.description}
                  </p>
                </div>
              </div>

              {index < services.length - 1 && (
                <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 md:mt-6 flex flex-col items-start md:items-center gap-4 text-left md:text-center">
          <p className="text-sm md:text-base text-gray-300/80">
            {t('services.closingText')}
          </p>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="btn btn-secondary"
          >
            <span>{t('services.cta')}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
  
export default Services;