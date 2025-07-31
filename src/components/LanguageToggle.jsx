import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 bg-gray-800 border border-gray-600 rounded text-white text-sm hover:bg-gray-700 transition-colors"
      title={currentLanguage === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      {currentLanguage === 'es' ? 'EN' : 'ES'}
    </button>
  );
};

export default LanguageToggle;