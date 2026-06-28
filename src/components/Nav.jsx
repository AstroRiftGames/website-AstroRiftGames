// src/components/Nav.jsx
import { useEffect, useState } from "react";
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const menuItems = [
    { href: "#projects", label: t('nav.games') },
    { href: "#about", label: t('nav.studio') },
    { href: "#services", label: t('nav.services') },
    { href: "#contact", label: t('nav.contact') }
  ];

  const slashStoreUrl = t('projects.games.slash.storeUrl');

  const handleInternalLinkClick = (event, href) => {
    event.preventDefault();
    setIsOpen(false);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', href);
    }
  };

  return (
    <>
      <nav
        className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}
        aria-label={t('nav.primaryLabel')}
      >
        <div className="site-nav__inner">
          <a
            href="#hero"
            onClick={(event) => handleInternalLinkClick(event, '#hero')}
            className="site-nav__logo-link"
            aria-label={t('nav.homeLabel')}
          >
            <img
              src="/images/LOGOD6-64x64.png"
              alt=""
              className="site-nav__logo"
            />
          </a>

          <div className="site-nav__links" aria-label={t('nav.sectionLabel')}>
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => handleInternalLinkClick(event, item.href)}
                className="site-nav__link"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="site-nav__actions">
            <a
              href={slashStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="site-nav__cta btn btn-secondary"
            >
              {t('nav.playSlash')}
            </a>
            <LanguageToggle />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="site-nav__menu-button"
            aria-label={isOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <span className="site-nav__menu-line" />
            <span className="site-nav__menu-line" />
            <span className="site-nav__menu-line" />
          </button>
        </div>
      </nav>

      <div
        className={`mobile-nav-backdrop ${isOpen ? 'mobile-nav-backdrop--open' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-navigation"
        className={`mobile-nav-panel ${isOpen ? 'mobile-nav-panel--open' : ''}`}
      >
        <div className="mobile-nav-panel__header">
          <img
            src="/images/LOGOD6-64x64.png"
            alt=""
            className="mobile-nav-panel__logo"
          />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="mobile-nav-panel__close"
            aria-label={t('nav.closeMenu')}
          >
            x
          </button>
        </div>

        <div className="mobile-nav-panel__body">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(event) => handleInternalLinkClick(event, item.href)}
              className="mobile-nav-panel__link"
            >
              {item.label}
            </a>
          ))}

          <a
            href={slashStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-panel__cta btn btn-secondary"
            onClick={() => setIsOpen(false)}
          >
            {t('nav.playSlash')}
          </a>

          <div className="mobile-nav-panel__language">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
