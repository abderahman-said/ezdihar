'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function HtmlAttributes() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLang = i18n.language || 'ar';
    const currentDir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    // Update html attributes
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', currentDir);
    
    // Update body class for font
    document.body.classList.remove('font-ar', 'font-en');
    if (currentLang === 'ar') {
      document.body.classList.add('font-ar');
    } else {
      document.body.classList.add('font-en');
    }
  }, [i18n.language]);

  return null;
}

