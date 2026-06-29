// src/components/Footer.jsx
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const internalLinks = [
    { href: '#about', label: t('nav.studio') },
    { href: '#services', label: t('nav.services') },
    { href: '#projects', label: t('nav.games') },
    { href: '#contact', label: t('nav.contact') }
  ];

  const contactEmail = 'contact@astroriftgames.com';

  const socialLinks = [
    {
      href: 'https://www.instagram.com/astroriftgames/',
      label: 'Instagram',
      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z'
    },
    {
      href: 'https://www.linkedin.com/company/astro-rift-games/',
      label: 'LinkedIn',
      path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    },
    {
      href: 'https://www.youtube.com/@AstroRiftGames',
      label: 'YouTube',
      path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
    }
  ];

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', '#hero');
  };

  const handleInternalLinkClick = (event, href) => {
    event.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', href);
    }
  };

  return (
    <footer className="relative border-t border-white/8 py-8 md:py-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/35 to-transparent" aria-hidden="true" />

      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:gap-5">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-indigo-300/95">
                Astro Rift Games
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-300/85 md:text-[0.95rem]">
                {t('footer.tagline')}
              </p>
            </div>

          <nav className="flex flex-wrap items-center gap-x-3 gap-y-2 md:justify-end" aria-label={t('footer.linksLabel')}>
            {internalLinks.map((item) => (
              <span key={item.href} className="flex min-h-10 items-center gap-x-3">
                <a
                  href={item.href}
                  onClick={(event) => handleInternalLinkClick(event, item.href)}
                  className="text-sm font-semibold tracking-[0.04em] text-gray-200/90 transition-colors duration-200 hover:text-white focus-visible:text-white"
                >
                  {item.label}
                </a>
                {item.href !== internalLinks[internalLinks.length - 1].href && (
                  <span className="text-indigo-300/45" aria-hidden="true">&middot;</span>
                )}
              </span>
            ))}
          </nav>
        </div>

        <div className="grid gap-4 border-t border-white/6 pt-5 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
          <div className="flex min-h-10 flex-wrap items-center gap-x-2 gap-y-1 text-sm md:order-2 md:justify-self-center">
            <span className="font-medium text-gray-500/90">
              {t('footer.contactLabel')}:
            </span>
            <a
              href={`mailto:${contactEmail}`}
              className="font-medium text-gray-300/80 transition-colors duration-200 hover:text-white focus-visible:text-white"
            >
              {contactEmail}
            </a>
          </div>

          <div className="flex items-center gap-3 md:order-1" aria-label={t('nav.followUs')}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/30 text-gray-300 transition-all duration-200 hover:border-indigo-400/45 hover:bg-indigo-500/10 hover:text-white focus-visible:border-indigo-400/55 focus-visible:bg-indigo-500/10 focus-visible:text-white md:h-11 md:w-11"
              >
                <svg className="h-5 w-5 transition-transform duration-200 group-hover:scale-105" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>

          <a
            href="#hero"
            onClick={scrollToTop}
            className="inline-flex min-h-10 w-fit items-center rounded-full border border-white/10 bg-black/20 px-3.5 text-xs font-semibold tracking-[0.08em] text-gray-300 transition-colors duration-200 hover:border-indigo-400/45 hover:bg-indigo-500/10 hover:text-white focus-visible:border-indigo-400/65 focus-visible:text-white md:order-3 md:justify-self-end"
            aria-label={t('footer.backToTop')}
          >
            <span>{t('footer.backToTop')}</span>
          </a>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/6 pt-4 text-xs text-gray-400/90 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} Astro Rift Games. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer