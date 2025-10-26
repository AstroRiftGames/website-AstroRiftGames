// src/components/Nav.jsx
import { useState, useEffect } from "react";
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { href: "#about", label: t('nav.about') },
    { href: "#services", label: t('nav.services') },
    { href: "#projects", label: t('nav.projects') },
    { href: "#contact", label: t('nav.contact') }
  ];

  const handleMenuClick = (href) => {
    setIsOpen(false);
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  };

  // FUNCIÓN MEJORADA PARA MANEJAR CLICKS EN BOTONES
  const handleButtonClick = (e, href) => {
    e.preventDefault();
    
    // FORZAR BLUR INMEDIATAMENTE
    e.target.blur();
    
    // REMOVER CLASES DE FOCUS SI EXISTEN
    e.target.classList.remove('focus-visible');
    
    // PEQUEÑO DELAY PARA ASEGURAR QUE EL BLUR SE APLIQUE
    setTimeout(() => {
      // ASEGURAR QUE NO QUEDE NINGÚN ESTADO DE FOCUS
      if (document.activeElement === e.target) {
        document.activeElement.blur();
      }
      
      // EJECUTAR LA NAVEGACIÓN
      handleMenuClick(href);
    }, 50);
  };

  // FUNCIÓN PARA MANEJAR EL LOGO
  const handleLogoClick = (e) => {
    e.preventDefault();
    e.target.blur();
    
    // BUSCAR EL ELEMENTO IMG DENTRO DEL ENLACE
    const imgElement = e.target.querySelector('img');
    if (imgElement) {
      imgElement.blur();
    }
    
    setTimeout(() => {
      handleMenuClick('#hero');
    }, 50);
  };

  return (
    <>
        <nav className={`relative top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-black/95 backdrop-blur-md shadow-xl border-b border-indigo-500/20'
          : 'bg-black/80 backdrop-blur-sm'
          }`}>
            
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16 md:h-20">
              {/* Botón hamburguesa móvil + Secciones desktop */}
              <div className="flex items-center flex-1">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  onBlur={(e) => e.target.blur()}
                  className="md:hidden text-2xl text-white hover:text-indigo-400 transition-colors mr-3 focus:outline-none"
                  aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                >
                  {isOpen ? "✕" : "☰"}
                </button>

                {/* Menú de secciones desktop con Quantum Effect */}
                <div className="hidden md:flex items-center space-x-3 overflow-visible z-20">
                  {menuItems.map((item) => (
                    
                    <button
                      key={item.href}
                      onClick={(e) => handleButtonClick(e, item.href)}
                      onMouseLeave={(e) => e.target.blur()}
                      className="quantum-nav-btn relative rounded-lg focus:outline-none focus:ring-0 overflow-visible z-10"
                    >
                      <img
                        src="/images/spider.svg"
                        alt="Astro Rift Games"
                        className="absolute -top-3 -left-2 h-10 md:h-12 object-contain z-20 pointer-events-none"
                      />
                      <span className="relative z-10">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Logo centrado */}
              <div className="flex-1 flex justify-center">
                <a
                  href="#hero"
                  onClick={handleLogoClick}
                  className="flex items-center focus:outline-none"
                >
                  <img
                    src="/images/LOGOD6-64x64.png"
                    alt="Astro Rift Games"
                    className="h-10 md:h-12 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>

              {/* Botón de idioma y espacio para mantener centrado el logo */}
              <div className="flex-1 flex justify-end">
                <LanguageToggle />
              </div>
            </div>
          </div>
        </nav>
      
      {/* Overlay del menú móvil */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menú móvil con efectos quantum */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-gray-900 via-gray-900 to-black shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Header del menú */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
            <img
              src="/images/arglogonamedown.png"
              alt="Logo"
              className="h-10 object-contain"
            />
            <button
              onClick={() => setIsOpen(false)}
              onBlur={(e) => e.target.blur()}
              className="text-white hover:text-red-400 text-xl transition-colors p-2 focus:outline-none"
              aria-label="Cerrar menú"
            >
              ✕
            </button>
          </div>

          {/* Opciones del menú móvil con efectos - VERSIÓN FINAL CON MÁS ESPACIO */}
          <div className="flex-1 px-6 py-8 mobile-menu-container overflow-visible">
            <div className="mobile-menu-spacing overflow-visible relative z-50">
              <br />
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={(e) => handleButtonClick(e, item.href)}
                  onMouseLeave={(e) => e.target.blur()}
                  className="quantum-mobile-btn w-full text-left rounded-xl transition-all duration-300 font-medium relative overflow-visible focus:outline-none focus:ring-0 bg-black/40"
                >
                  <img
                    src="/images/spider.svg"
                    alt=""
                    className="fixed -top-2 -left-2 h-10 object-contain z-[9999] pointer-events-none"
                  />
                  <span className="quantum-mobile-text relative z-20">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Footer del menú con redes sociales */}
          <div className="p-6 border-t border-gray-700/50">
            <p className="text-gray-400 text-sm mb-4 text-center">{t('nav.followUs')}</p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.instagram.com/astroriftgames/" target="_blank" rel="noopener noreferrer"
                className="quantum-social-btn w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-all duration-300 relative overflow-hidden focus:outline-none">
                <svg className="w-5 h-5 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/astro-rift-games/" target="_blank" rel="noopener noreferrer"
                className="quantum-social-btn w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 relative overflow-hidden focus:outline-none">
                <svg className="w-5 h-5 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@AstroRiftGames" target="_blank" rel="noopener noreferrer"
                className="quantum-social-btn w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 relative overflow-hidden focus:outline-none">
                <svg className="w-5 h-5 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav