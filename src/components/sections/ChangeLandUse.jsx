'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function ChangeLandUse() {
  const { t, i18n } = useTranslation();

  const features = [
    {
      image: '/Group 132966.png',
      title: 'دمج الإبداع والتكنولوجيا',
      titleBold: 'الإبداع والتكنولوجيا',
      description: 'دمج',
      descriptionAfter: 'في منظومة واحدة',
    },
    {
      image: '/Group 132965.png',
      title: 'فهم عميق للثقافة والسلوك الشرائي السعودي',
      titleBold: 'للثقافة والسلوك الشرائي السعودي',
      description: 'فهم عميق',
      descriptionAfter: '',
    },
    {
      image: '/Group 132964.png',
      title: 'موثوق من أبرز القطاعات العقارات، والجهات الحكومية، luxury الفخ',
      titleBold: 'القطاعات',
      description: 'موثوق من أبرز',
      descriptionMiddle: 'العقارات،',
      descriptionAfter: 'والجهات الحكومية، luxury الفخ',
    },
    {
      image: '/Group 132963.png',
      title: 'نتائج قابلة للقياس وعائد استثماري واضح',
      titleBold: 'للقياس و',
      description: 'نتائج قابلة',
      descriptionMiddle: 'عائد استثماري',
      descriptionAfter: 'واضح',
    }
  ];

  return (
    <section id="changeLandUse" className="py-12 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#60008E]">
            لماذا تختار إزدهار؟
          </h2>
          <p className="text-lg sm:text-2xl text-[#33BEF2] max-w-3xl mx-auto">
            اختر الابتكار على الطريقة السعودية
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            return (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <Image 
                      src={feature.image}
                      width={140}
                      height={140}
                      alt={feature.title}
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                </div>
                
                <div className="text-lg sm:text-xl lg:text-[22px] text-gray-700 leading-relaxed px-2">
                  {/* First Feature - دمج الإبداع والتكنولوجيا */}
                  {index === 0 && (
                    <>
                      <span className="text-gray-600">دمج </span>
                      <span className="font-bold text-gray-900">الإبداع والتكنولوجيا </span>
                      <span className="text-gray-600">في منظومة واحدة</span>
                    </>
                  )}
                  
                  {/* Second Feature - فهم عميق */}
                  {index === 1 && (
                    <>
                      <span className="text-gray-600">فهم عميق </span>
                      <span className="font-bold text-gray-900">للثقافة والسلوك</span>
                      <br />
                      <span className="font-bold text-gray-900">الشرائي السعودي</span>
                    </>
                  )}
                  
                  {/* Third Feature - موثوق من أبرز */}
                  {index === 2 && (
                    <>
                      <span className="text-gray-600">موثوق من أبرز </span>
                      <span className="font-bold text-gray-900">القطاعات </span>
                      <span className="text-gray-600">العقارات،</span>
                      <br />
                      <span className="text-gray-600">والجهات الحكومية، </span>
                      <span className="font-bold text-gray-900">luxury </span>
                      <span className="text-gray-600">الفخ</span>
                    </>
                  )}
                  
                  {/* Fourth Feature - نتائج قابلة */}
                  {index === 3 && (
                    <>
                      <span className="text-gray-600">نتائج قابلة </span>
                      <span className="font-bold text-gray-900">للقياس </span>
                      <span className="text-gray-600">و</span>
                      <br />
                      <span className="font-bold text-gray-900">عائد استثماري </span>
                      <span className="text-gray-600">واضح</span>
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