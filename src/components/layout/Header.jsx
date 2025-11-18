'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';

export default function Header() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-6">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image width={161.17} height={70} src="/logo.png" alt={t('hero.title')} className="w-[121.17px]  object-contain" />
        </div>
        <div className="hidden lg:flex items-center gap-8">
          <a href="#home" className="text-white hover:text-purple-300 transition">
            {t('nav.home')}
          </a> <a href="#services" className="text-white hover:text-purple-300 transition">
            {t('nav.services')}
          </a>  <a href="#about" className="text-white hover:text-purple-300 transition">
            {t('nav.about')}
          </a>
          <a href="#blog" className="text-white hover:text-purple-300 transition">
            {t('nav.blog')}
          </a>
       
          <a href="#contact" className="text-white hover:text-purple-300 transition">
            {t('nav.contact')}
          </a>




        </div>
        <LanguageSwitcher />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white text-2xl z-50"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>


      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-purple-900/95 backdrop-blur-lg mt-4 rounded-2xl mx-4 py-6 shadow-2xl">
          <div className="flex flex-col gap-4 px-6">
            <a href="#home" onClick={closeMobileMenu} className="text-white hover:text-purple-300 transition py-2 border-b border-white/10">
              {t('nav.home')}
            </a>
            <a href="#services" onClick={closeMobileMenu} className="text-white hover:text-purple-300 transition py-2 border-b border-white/10">
              {t('nav.services')}
            </a>
            <a href="#about" onClick={closeMobileMenu} className="text-white hover:text-purple-300 transition py-2 border-b border-white/10">
              {t('nav.about')}
            </a>
            <a href="#blog" onClick={closeMobileMenu} className="text-white hover:text-purple-300 transition py-2 border-b border-white/10">
              {t('nav.blog')}
            </a>
            <a href="#contact" onClick={closeMobileMenu} className="text-white hover:text-purple-300 transition py-2 border-b border-white/10">
              {t('nav.contact')}
            </a>
             
            <div onClick={closeMobileMenu}>
              <LanguageSwitcher mobile />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

