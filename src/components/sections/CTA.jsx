'use client';

import { useTranslation } from 'react-i18next';

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-[45px] font-bold text-[#530073] mb-3 sm:mb-4">
          {t('cta.title')} <br />
          {t('cta.titleBold')}
        </h2>
        
        <p className="text-[#707070] text-base sm:text-xl mb-6 sm:mb-8">
          {t('cta.description')}
        </p>
        <button className="px-8 sm:px-12 py-2 sm:py-3 border border-[#530073] text-[#530073] rounded-full hover:text-white hover:bg-[#530073] transition font-semibold text-base w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2">
          {t('cta.button')}
        </button>
      </div>
    </section>
  );
}

