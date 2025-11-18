'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Footer() {
  const { t } = useTranslation();
 
  return (
    <footer className="  ">
      <div className="footer mt-[-141px] py-20 pt-[150px]">
        <div className="flex  items-center flex-col justify-center gap-3 pb-4">
            <Image width={161.17} height={70} src="/logo-footer.png" alt={t('hero.title')} className="w-[161.17px] h-[70px] object-contain" />
          <div
            className="
  relative w-[159.68px] h-2 bg-[#530073] rounded-xl mx-auto mt-4
  before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2
  before:-left-2 before:w-4 before:h-4 before:bg-[#33BEF2]
  before:rounded-full before:border-2 before:border-white
"
          ></div>
         <div className='text-[#530073]  text-[22px]'> تسويق يتجاوز الخيال</div>
          </div>
        <div className="flex items-center justify-between px-10 pt-4 mx-auto">
        <div className=""></div>
           
          <div className=" flex items-center max-w-[800px]  text-[22px] justify-between gap-8">
            <a href="#home" className="text-[#530073]  transition">
              {t('nav.home')}
            </a> <a href="#services" className="text-[#530073]  transition">
              {t('nav.services')}
            </a>  <a href="#about" className="text-[#530073]  transition">
              {t('nav.about')}
            </a>
            <a href="#blog" className="text-[#530073]  transition">
              {t('nav.blog')}
            </a>

            <a href="#contact" className="text-[#530073]  transition">
              {t('nav.contact')}
            </a>




          </div>
          <LanguageSwitcher color="#530073" />

           

        </div>
      </div>
      {/* Footer Bottom */}
      <div className="  bg-[#530073] py-5">
        <p className="text-[#ffffffd4] text-lg sm:text-xl text-center  ">
          {t('footer.rights')}
        </p>
      </div>

    </footer>
  );
}

