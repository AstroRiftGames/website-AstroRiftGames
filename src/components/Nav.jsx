import logo from '../assets/argBanner.png'
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full shadow-md z-50 w-full flex items-center justify-between p-6 bg-black text-white">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Botón ☰ */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-3xl"
            >
              ☰
            </button>
            {/* Logo */}
            <a href="/">
              <img src={logo} alt="Logo" className="h-16 object-contain" />
            </a>
          </div>

          {/* Menú desktop */}
          <div className="hidden md:flex gap-6 text-lg">
            <a href="#hero" className="hover:text-blue-600">Inicio</a>
            <a href="#about" className="hover:text-blue-600">Quiénes Somos</a>
            <a href="#services" className="hover:text-blue-600">Servicios</a>
            <a href="#projects" className="hover:text-blue-600">Proyectos</a>
            <a href="#contact" className="hover:text-blue-600">Contacto</a>
          </div>
        </div>
      </nav>
      {/* Overlay del menú mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black shadow-lg z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col p-6 gap-6 pt-30">
          {/* Botón cerrar ✖ */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-3xl"
          >
            ✖
          </button>

          {/* Opciones del menú */}
          <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Inicio</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Quiénes Somos</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Servicios</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Proyectos</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Contacto</a>
        </div>
      </div>
    </>
  )
}

export default Nav