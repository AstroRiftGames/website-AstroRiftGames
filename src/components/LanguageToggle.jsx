import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();
  const isSpanish = currentLanguage === 'es';

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="language-toggle"
      title={isSpanish ? 'Switch to English' : 'Cambiar a Espanol'}
      aria-label={isSpanish ? 'Switch to English' : 'Cambiar a Espanol'}
    >
      <span className="language-toggle__flag" aria-hidden="true">
        <img
          src={isSpanish ? '/images/Flag_of_Spain.png' : '/images/Flag_of_the_United_States.png'}
          alt=""
          className="language-toggle__flag-img"
        />
      </span>
      <span className="language-toggle__code">
        {isSpanish ? 'ES' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;
