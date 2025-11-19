'use client';

import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Hero() {
  const { t } = useTranslation();
  const { dir } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen    overflow-x-hidden">
      {/* Glowing Effects */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-10 z-[1]">
        <div className="grid grid-cols-8 sm:grid-cols-12 gap-2 sm:gap-4 h-full p-4 sm:p-8">
          {[...Array(60)].map((_, i) => (
            <div key={i} className="border border-blue-400/30"></div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-20 min-h-screen flex items-center z-10">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-center w-full">
          {/* Text Content */}
          <div className={`space-y-3 sm:space-y-4 md:space-y-8 order-2 md:order-1 text-center ${dir === 'rtl' ? 'md:text-right' : 'md:text-left'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#33BEF2] font-bold leading-tight">
              {t('hero.title')}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-300">
              {t('hero.subtitle')}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed px-2 sm:px-0">
              {t('hero.description')}
            </p>
            <div className="flex gap-3 sm:gap-5 pt-4 justify-center md:justify-start" role="list">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded p-2"
                aria-label={t('common.visitFacebook')}
              >
                <FaFacebookF className="text-white text-lg sm:text-2xl" aria-hidden="true" />
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded p-2"
                aria-label={t('common.visitInstagram')}
              >
                <FaInstagram className="text-white text-lg sm:text-2xl" aria-hidden="true" />
              </a>
              <a 
                href="https://www.twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded p-2"
                aria-label={t('common.visitTwitter')}
              >
                <FaTwitter className="text-white text-lg sm:text-2xl" aria-hidden="true" />
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded p-2"
                aria-label={t('common.visitLinkedIn')}
              >
                <FaLinkedinIn className="text-white text-lg sm:text-2xl" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Robot Image */}
          <div className="flex justify-center items-center order-1 md:order-2">
            <div className="relative w-full max-w-md lg:max-w-xl">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 sm:w-96 h-16 sm:h-24">
                <div className="w-full h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

