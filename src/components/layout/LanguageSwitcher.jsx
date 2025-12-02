'use client';

import { useTranslation } from 'react-i18next';
import { FaGlobe } from "react-icons/fa";

export default function LanguageSwitcher({ mobile = false, color = "#FFFFFF" }) {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
  };

  const buttonClass = `
    px-4 py-2 rounded-full text-sm transition flex items-center gap-2
    ${mobile ? 'mt-2 w-full justify-center' : ''}
  `;

  return (
    <button
      onClick={changeLanguage}
      className={buttonClass}
      style={{
        border: `1px solid ${color}`,
        color: color,
        backgroundColor: 'transparent'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = `${color}20`; // opacity 12%
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
      aria-label={i18n.language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
      aria-pressed="false"
    >
      <span aria-hidden="true">{i18n.language === 'ar' ? 'English' : 'العربية'}</span>
      <FaGlobe className="w-4 h-4 text-[#33BEF2]"  aria-hidden="true" />
    </button>
  );
}
