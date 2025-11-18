'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export function useLanguage() {
  const { i18n } = useTranslation();
  const [dir, setDir] = useState('rtl');

  useEffect(() => {
    const currentDir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    setDir(currentDir);
    document.documentElement.dir = currentDir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return { dir, language: i18n.language };
}

