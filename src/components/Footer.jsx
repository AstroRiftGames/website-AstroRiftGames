import React from 'react'
import Socialicons from './Socialicons'
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="mt-20 bg-gray-900 text-white py-8 text-center">
      <p className="mb-2">© {new Date().getFullYear()} {t('derechos')}</p>
      <Socialicons />
    </footer>
  )
}

export default Footer