import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="quantum-nav-btn relative px-3 py-2 text-white text-sm flex items-center gap-2 min-w-[60px] justify-center rounded-lg"
      title={currentLanguage === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      {/* Bandera actual */}
      <div className="relative w-5 h-4 rounded-sm overflow-hidden">
        <img 
          src={currentLanguage === 'es' ? '/images/Flag_of_Spain.png' : '/images/Flag_of_the_United_States.png'}
          alt={currentLanguage === 'es' ? 'Bandera de España' : 'Flag of USA'}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Texto del idioma */}
      <span className="font-medium">
        {currentLanguage === 'es' ? 'ES' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;