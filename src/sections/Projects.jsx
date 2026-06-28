// src/sections/Projects.jsx
import { useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import slashTeaser from '../assets/videos/teaser.mp4';

const ProjectMedia = ({ src, alt, videoSrc, linkUrl, ariaLabel }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (!videoSrc || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(err => {
          console.log("Autoplay blocked or paused:", err);
        });
    }
  };

  const handleMouseLeave = () => {
    if (!videoSrc) return;
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const Container = linkUrl ? 'a' : 'div';

  return (
    <Container 
      href={linkUrl}
      target={linkUrl ? "_blank" : undefined}
      rel={linkUrl ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={`scifi-image-wrapper aspect-video w-full block group relative ${linkUrl ? 'cursor-pointer focus-visible:outline-none' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      <div className="scifi-image-inner relative w-full h-full">
        {/* Static Image */}
        <img 
          src={src} 
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {/* Muted Video Preview */}
        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            loop
            preload="metadata"
            poster={src}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
      </div>
    </Container>
  );
};

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
      features: t('projects.games.corvus.features'),
      video: "", // stays static
      trailerUrl: ""
    },
    {
      id: 2,
      title: t('projects.games.muecas.title'),
      description: t('projects.games.muecas.description'),
      image: "/images/MuecasGameLogo.jpg",
      link: "https://astroriftgames.itch.io/muecas",
      genre: t('projects.games.muecas.genre'),
      features: t('projects.games.muecas.features'),
      video: "", // stays static
      trailerUrl: ""
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
    features: t('projects.games.slash.features'),
    video: slashTeaser, // Slash 'em Out uses the local MP4 for hover preview
    trailerUrl: "https://www.youtube.com/watch?v=GoBtHEHc7IM" // Store YouTube trailer URL
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-14 md:mb-16">
          <div className="w-20 h-px bg-gradient-to-r from-indigo-400 to-transparent mb-5" />
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-400 mb-4">
            {t('projects.eyebrow')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg md:text-xl leading-8 text-gray-300/90 max-w-2xl">
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
            <ProjectMedia 
              src={slash.image} 
              alt={slash.title} 
              videoSrc={slash.video} 
              linkUrl={slash.trailerUrl} 
              ariaLabel={t('projects.games.slash.watchTrailerOnYoutube')} 
            />
          </div>

          {/* Details */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h3 className="text-4xl font-bold mb-1 text-white leading-tight">
              {slash.title}
            </h3>
            
            <p className="text-indigo-400 font-semibold mb-5 text-sm tracking-wide">
              {slash.genre.replace(/ - /g, ' · ')} · Android
            </p>
            
            <p className="text-gray-300/95 leading-7 mb-8 text-base max-w-xl">
              {slash.description}
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
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
                  <ProjectMedia src={game.image} alt={game.title} videoSrc={game.video} />
                </div>

                {/* Details */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-2 text-white leading-tight">
                    {game.title}
                  </h3>
                  
                  <p className="text-indigo-400 font-semibold mb-4 text-sm tracking-wide">
                    {game.genre}
                  </p>
                  
                  <p className="text-gray-300/95 leading-7 mb-6 text-base max-w-xl">
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
                  
                  <div className="flex flex-wrap gap-4">
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
                    {game.trailerUrl && (
                      <a 
                        href={game.trailerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <span>{t('projects.watchTrailer')}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.75 12a2.75 2.75 0 11-5.5 0 2.75 2.75 0 015.5 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.5 12h5.25M3.25 12h5.25" />
                        </svg>
                      </a>
                    )}
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



