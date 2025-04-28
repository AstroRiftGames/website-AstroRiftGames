import React from 'react'
import Socialicons from './Socialicons'

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-900 text-white py-8 text-center">
      <p className="mb-2">© {new Date().getFullYear()} Astro Rift Games</p>
      <Socialicons />
    </footer>
  )
}

export default Footer