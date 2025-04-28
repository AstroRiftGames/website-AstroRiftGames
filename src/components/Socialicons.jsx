import React from 'react'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Socialicons = () => {
  return (
    <div className="flex space-x-6 mt-8 justify-center">
        <a href="https://www.instagram.com/astroriftgames/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 text-3xl transition">
        <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/astro-rift-games/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 text-3xl transition">
        <FaLinkedin />
        </a>
        <a href="https://www.youtube.com/@AstroRiftGames" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 text-3xl transition">
        <FaYoutube />
        </a>
    </div>
  )
}

export default Socialicons