// src/sections/Hero.jsx
import { useLanguage } from '../contexts/LanguageContext';
import heroBanner from '../assets/Banner.png';
import heroIsotype from '../assets/arglogo.png';

const Hero = () => {
  const { t } = useLanguage();

  const handleSectionLink = (event, href) => {
    event.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', href);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-80px)] overflow-hidden px-4 py-8 text-white md:py-10"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_36%,rgba(99,102,241,0.18),transparent_34%),radial-gradient(circle_at_18%_20%,rgba(139,92,246,0.12),transparent_30%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-160px)] max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12 lg:-translate-y-4">
        <div className="relative z-10 max-w-3xl lg:col-span-7">
          <h1 className="sr-only">Astro Rift Games</h1>

          <img
            src={heroBanner}
            alt="Astro Rift Games"
            className="mb-6 block h-auto w-full max-w-[26.5rem] object-contain sm:max-w-[32rem] md:max-w-[35rem]"
          />

          <p className="mb-4 max-w-2xl text-[1.45rem] font-semibold leading-tight text-white md:text-[2.15rem] md:leading-tight">
            <span className="block">{t('hero.headlineLine1')}</span>
            <span className="block">{t('hero.headlineLine2')}</span>
          </p>

          <p className="max-w-2xl text-base leading-8 text-gray-300/95 md:text-lg">
            {t('hero.supportingText')}
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              onClick={(event) => handleSectionLink(event, '#projects')}
              className="btn btn-secondary hero-cta w-full sm:w-auto"
            >
              <span>{t('hero.viewGames')}</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#services"
              onClick={(event) => handleSectionLink(event, '#services')}
              className="btn btn-secondary hero-cta w-full sm:w-auto"
            >
              <span>{t('hero.viewServices')}</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500/85 md:text-sm">
            {t('hero.latestReleaseLabel')}{' '}
            <span className="text-indigo-300">{t('hero.latestReleaseTitle')}</span>
          </p>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-[-24%] -z-0 flex w-[76%] items-center justify-end opacity-16 sm:right-[-18%] sm:w-[64%] lg:relative lg:right-[-5%] lg:z-0 lg:col-span-5 lg:min-h-[430px] lg:w-auto lg:justify-center lg:opacity-100" aria-hidden="true">
          <img
            src={heroIsotype}
            alt=""
            className="hero-brand-isotype h-auto w-[30rem] max-w-none opacity-[0.34] sm:w-[36rem] lg:w-[34rem] lg:opacity-[0.36]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;