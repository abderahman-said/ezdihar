'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function ChangeLandUse() {
  const { t } = useTranslation();

  const features = [
    {
      image: '/Group 132966.png',
      key: '1',
    },
    {
      image: '/Group 132965.png',
      key: '2',
    },
    {
      image: '/Group 132964.png',
      key: '3',
    },
    {
      image: '/Group 132963.png',
      key: '4',
    }
  ];

  return (
    <section id="changeLandUse" className="py-12 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#60008E]">
            {t('whyChoose.title')}
            
            <span className='text-[#33BEF2]'>{t('whyChoose.title_')}</span>
          </h2>
          <p className="text-lg sm:text-2xl text-[#33BEF2] max-w-3xl mx-auto">
            {t('whyChoose.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const featureKey = feature.key;
            const featureData = t(`whyChoose.features.${featureKey}`, { returnObjects: true });
            
            return (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <Image 
                      src={feature.image}
                      width={140}
                      height={140}
                      alt={t(`whyChoose.features.${featureKey}.text`) + t(`whyChoose.features.${featureKey}.bold`)}
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                </div>
                
                <div className="text-lg sm:text-xl lg:text-[22px] text-gray-700 leading-relaxed px-2">
                  {/* First Feature */}
                  {featureKey === '1' && (
                    <>
                      <span className="text-gray-600">{t('whyChoose.features.1.text')}</span>
                      <span className="font-bold text-gray-900">{t('whyChoose.features.1.bold')}</span>
                      <span className="text-gray-600">{t('whyChoose.features.1.after')}</span>
                    </>
                  )}
                  
                  {/* Second Feature */}
                  {featureKey === '2' && (
                    <>
                      <span className="text-gray-600">{t('whyChoose.features.2.text')}</span>
                      <span className="font-bold text-gray-900">{t('whyChoose.features.2.bold')}</span>
                    </>
                  )}
                  
                  {/* Third Feature */}
                  {featureKey === '3' && (
                    <>
                      <span className="text-gray-600">{t('whyChoose.features.3.text')}</span>
                      <span className="font-bold text-gray-900">{t('whyChoose.features.3.bold')}</span>
                      <span className="text-gray-600">{t('whyChoose.features.3.middle')}</span>
                      <br />
                      <span className="text-gray-600">{t('whyChoose.features.3.after')}</span>
                    </>
                  )}
                  
                  {/* Fourth Feature */}
                  {featureKey === '4' && (
                    <>
                      <span className="text-gray-600">{t('whyChoose.features.4.text')}</span>
                      <span className="font-bold text-gray-900">{t('whyChoose.features.4.bold')}</span>
                      <span className="text-gray-600">{t('whyChoose.features.4.middle')}</span>
                      <br />
                      <span className="font-bold text-gray-900">{t('whyChoose.features.4.after')}</span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
