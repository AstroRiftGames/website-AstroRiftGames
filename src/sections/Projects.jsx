// src/sections/Projects.jsx
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const games = [
    {
      id: 1,
      title: t('projects.games.corvus.title'),
      description: t('projects.games.corvus.description'),
      image: "/images/corvus_logo_SinNombre.png",
      link: "https://astroriftgames.itch.io/project-corvus",
      genre: t('projects.games.corvus.genre'),
      features: t('projects.games.corvus.features')
    },
    {
      id: 2,
      title: t('projects.games.muecas.title'),
      description: t('projects.games.muecas.description'),
      image: "/images/MuecasGameLogo.jpg",
      link: "https://astroriftgames.itch.io/muecas",
      genre: t('projects.games.muecas.genre'),
      features: t('projects.games.muecas.features')
    }
  ];
  
  const slash = {
    id: 3,
    title: t('projects.games.slash.title'),
    description: t('projects.games.slash.description'),
    image: "/images/SlashEmOut.png",
    link: t('projects.games.slash.storeUrl'),
    storeBadge: t('projects.games.slash.storeBadge'),
    storeLabel: t('projects.games.slash.storeLabel'),
    cta: t('projects.games.slash.cta'),
    genre: t('projects.games.slash.genre'),
    features: t('projects.games.slash.features')
  };

  const renderScifiImage = (src, alt) => (
    <div className="scifi-image-wrapper aspect-video w-full">
      <div className="scifi-image-inner">
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
        />
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Latest Release Subcategory Divider */}
        <div className="text-center mb-16 mt-12 relative max-w-5xl mx-auto">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent mx-auto mb-4"></div>
          <h4 className="text-base font-bold tracking-widest text-indigo-400 uppercase">
            {t('projects.latestRelease')}
          </h4>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent mt-4"></div>
        </div>

        {/* Featured Project: Slash 'em Out (Open Editorial Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-28">
          {/* Image (Visually Dominant) */}
          <div className="lg:col-span-8">
            {renderScifiImage(slash.image, slash.title)}
          </div>

          {/* Details */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h3 className="text-4xl font-bold mb-1 text-white leading-tight">
              {slash.title}
            </h3>
            
            <p className="text-indigo-400 font-semibold mb-5 text-sm tracking-wide">
              {slash.genre.replace(/ - /g, ' · ')} · Android
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-8 text-base">
              {slash.description}
            </p>
            
            <div>
              <a
                href={slash.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${slash.cta} - ${slash.storeLabel}`}
                className="inline-flex w-full max-w-60 items-center justify-center rounded-lg transition-transform duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <img
                  src={slash.storeBadge}
                  alt={slash.storeLabel}
                  className="block h-auto w-full"
                />
              </a>
            </div>
          </div>
        </div>

        {/* conceptual heading split */}
        <div className="text-center my-28 relative max-w-5xl mx-auto">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent mx-auto mb-4"></div>
          <h4 className="text-base font-bold tracking-widest text-indigo-400 uppercase">
            {t('projects.otherProjects')}
          </h4>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent mt-4"></div>
        </div>

        {/* Secondary Projects List (Slalom Layout - Visually Smaller) */}
        <div className="space-y-24 max-w-5xl mx-auto">
          {games.map((game, index) => (
            <div key={game.id}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Image (alternate position on desktop using lg:order-last) */}
                <div className={`lg:col-span-6 ${index % 2 === 0 ? '' : 'lg:order-last'}`}>
                  {renderScifiImage(game.image, game.title)}
                </div>

                {/* Details */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-2 text-white leading-tight">
                    {game.title}
                  </h3>
                  
                  <p className="text-indigo-400 font-semibold mb-4 text-sm tracking-wide">
                    {game.genre}
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 text-base">
                    {game.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {game.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="bg-indigo-500/5 text-gray-400 px-3 py-1 rounded text-xs border border-indigo-500/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div>
                    <a 
                      href={game.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <span>{t('projects.viewProject')}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Add visual separator between secondary games but not after the last one */}
              {index < games.length - 1 && <hr className="editorial-separator" />}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;



