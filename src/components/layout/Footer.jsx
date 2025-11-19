'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Footer() {
  const { t } = useTranslation();
 
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="" role="contentinfo">
      <div className="footer mt-[-141px] py-20 pt-[150px]">
        <div className="flex items-center flex-col justify-center gap-3 pb-4">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} aria-label={t('nav.home')}>
              <Image width={161.17} height={70} src="/logo-footer.png" alt={t('hero.title')} className="w-[161.17px] h-[70px] object-contain" />
            </a>
          <div
            className="
  relative w-[159.68px] h-2 bg-[#530073] rounded-xl mx-auto mt-4
  before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2
  before:-left-2 before:w-4 before:h-4 before:bg-[#33BEF2]
  before:rounded-full before:border-2 before:border-white
"
            aria-hidden="true"
          ></div>
         <div className='text-[#530073] text-base sm:text-lg md:text-[22px] text-center px-4'>{t('footer.tagline')}</div>
          </div>
        <nav className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-10 pt-4 mx-auto gap-4 sm:gap-0" aria-label={t('footer.footerNav') || 'Footer navigation'}>
        <div className="hidden sm:block"></div>
           
          <div className="flex flex-wrap items-center justify-center max-w-[800px] text-base sm:text-lg md:text-[22px] gap-4 sm:gap-6 md:gap-8" role="menubar">
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')}
              className="text-[#530073] transition focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded px-2 py-1"
              role="menuitem"
              aria-label={t('nav.home')}
            >
              {t('nav.home')}
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleLinkClick(e, '#services')}
              className="text-[#530073] transition focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded px-2 py-1"
              role="menuitem"
              aria-label={t('nav.services')}
            >
              {t('nav.services')}
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleLinkClick(e, '#about')}
              className="text-[#530073] transition focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded px-2 py-1"
              role="menuitem"
              aria-label={t('nav.about')}
            >
              {t('nav.about')}
            </a>
            <a 
              href="#blog" 
              onClick={(e) => handleLinkClick(e, '#blog')}
              className="text-[#530073] transition focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded px-2 py-1"
              role="menuitem"
              aria-label={t('nav.blog')}
            >
              {t('nav.blog')}
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="text-[#530073] transition focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded px-2 py-1"
              role="menuitem"
              aria-label={t('nav.contact')}
            >
              {t('nav.contact')}
            </a>
          </div>
          <LanguageSwitcher color="#530073" />
        </nav>
      </div>
      {/* Footer Bottom */}
      <div className="bg-[#530073] py-5">
        <p className="text-[#ffffffd4] text-lg sm:text-xl text-center">
          {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}

