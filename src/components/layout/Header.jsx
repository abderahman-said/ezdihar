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

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMobileMenu();
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-6" role="banner">
      <nav className="flex items-center justify-between max-w-7xl mx-auto" role="navigation" aria-label={t('nav.main') || 'Main navigation'}>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} aria-label={t('nav.home')}>
            <Image width={161.17} height={70} src="/logo.png" alt={t('hero.title')} className="w-[121.17px] object-contain" priority />
          </a>
        </div>
        <div className="hidden lg:flex items-center gap-8" role="menubar">
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="text-white hover:text-purple-300 transition focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded px-2 py-1"
            role="menuitem"
            aria-label={t('nav.home')}
          >
            {t('nav.home')}
          </a>
          <a 
            href="#services" 
            onClick={(e) => handleLinkClick(e, '#services')}
            className="text-white hover:text-purple-300 transition focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded px-2 py-1"
            role="menuitem"
            aria-label={t('nav.services')}
          >
            {t('nav.services')}
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleLinkClick(e, '#about')}
            className="text-white hover:text-purple-300 transition focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded px-2 py-1"
            role="menuitem"
            aria-label={t('nav.about')}
          >
            {t('nav.about')}
          </a>
          <a 
            href="#blog" 
            onClick={(e) => handleLinkClick(e, '#blog')}
            className="text-white hover:text-purple-300 transition focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded px-2 py-1"
            role="menuitem"
            aria-label={t('nav.blog')}
          >
            {t('nav.blog')}
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="text-white hover:text-purple-300 transition focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded px-2 py-1"
            role="menuitem"
            aria-label={t('nav.contact')}
          >
            {t('nav.contact')}
          </a>
        </div>
        <LanguageSwitcher />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white text-2xl z-50 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded p-2"
          aria-label={mobileMenuOpen ? t('nav.closeMenu') || 'Close menu' : t('nav.openMenu') || 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="lg:hidden absolute top-full left-0 right-0 bg-purple-900/95 backdrop-blur-lg mt-4 rounded-2xl mx-4 py-6 shadow-2xl"
          role="menu"
          aria-label={t('nav.mobileMenu') || 'Mobile menu'}
        >
          <div className="flex flex-col gap-4 px-6">
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')} 
              className="text-white hover:text-purple-300 transition py-2 border-b border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded px-2"
              role="menuitem"
            >
              {t('nav.home')}
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleLinkClick(e, '#services')} 
              className="text-white hover:text-purple-300 transition py-2 border-b border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded px-2"
              role="menuitem"
            >
              {t('nav.services')}
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleLinkClick(e, '#about')} 
              className="text-white hover:text-purple-300 transition py-2 border-b border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded px-2"
              role="menuitem"
            >
              {t('nav.about')}
            </a>
            <a 
              href="#blog" 
              onClick={(e) => handleLinkClick(e, '#blog')} 
              className="text-white hover:text-purple-300 transition py-2 border-b border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded px-2"
              role="menuitem"
            >
              {t('nav.blog')}
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, '#contact')} 
              className="text-white hover:text-purple-300 transition py-2 border-b border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded px-2"
              role="menuitem"
            >
              {t('nav.contact')}
            </a>
             
            <div onClick={closeMobileMenu} role="none">
              <LanguageSwitcher mobile />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

