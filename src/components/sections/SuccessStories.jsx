"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

export default function SuccessStories() {
  const { t } = useTranslation();

  const stories = [
    {
      id: 1,
      logo: '/NoPath.png',
      companyName: t('successStories.companies.alfalah.name'),
      thumbIcon: '/ef4018b0-494b-4b98-a5f4-2b8441ea3074.png',
      description: t('successStories.companies.alfalah.description'),
    },
    {
      id: 2,
      logo: '/NoPath.png',
      companyName: t('successStories.companies.future.name'),
      thumbIcon: '/ef4018b0-494b-4b98-a5f4-2b8441ea3074.png',
      description: t('successStories.companies.future.description'),
    },
    {
      id: 3,
      logo: '/NoPath.png',
      companyName: t('successStories.companies.innovation.name'),
      thumbIcon: '/ef4018b0-494b-4b98-a5f4-2b8441ea3074.png',
      description: t('successStories.companies.innovation.description'),
    },
    {
      id: 4,
      logo: '/NoPath.png',
      companyName: t('successStories.companies.development.name'),
      thumbIcon: '/ef4018b0-494b-4b98-a5f4-2b8441ea3074.png',
      description: t('successStories.companies.development.description'),
    }
  ];

  return (
    <section className="SuccessStories pb-12 sm:pb-16 md:pb-24 pt-24 sm:pt-32 md:pt-[150px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[#60008E]">
            {t('successStories.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#33BEF2] max-w-3xl mx-auto px-2">
            {t('successStories.subtitle')}
          </p>
        </div>

        <div className="max-w-[965.67px] mx-auto pb-8 sm:pb-12 md:pb-16">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet custom-success-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active custom-success-bullet-active',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="success-stories-custom-swiper"
          >
            {stories.map((story) => (
              <SwiperSlide key={story.id}>
                <div className="text-white flex flex-col sm:flex-row mx-2 sm:mx-4 md:mx-[50px] items-end relative gap-4 sm:gap-0">
                  {/* Company Card - Right Side */}
                  <div className="flex bg-card-white relative sm:-bottom-3 sm:-end-9 z-[1] w-full sm:min-w-[200px] md:min-w-[314.8px] sm:w-fit items-center p-6 sm:p-8 md:p-[35px_55px_42px] flex-col gap-3 sm:gap-4 md:gap-6">
                    <Image
                      width={188}
                      height={188}
                      src={story.logo}
                      alt={story.companyName}
                      className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[188px] md:h-[188px] object-cover rounded-[50%]"
                    />
                    <h3 className="text-lg sm:text-xl md:text-2xl text-[#6B2A98] text-center font-bold mb-1">
                      {story.companyName}
                    </h3>
                  </div>

                  {/* Thumb Icon */}
                  <Image
                    width={188}
                    height={188}
                    src={story.thumbIcon}
                    alt="Success Icon"
                    className="absolute hidden sm:block end-[-40px] sm:end-[-50px] md:end-[-65px] top-0 w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] object-contain"
                    aria-hidden="true"
                  />

                  {/* Description Card - Left Side */}
                  <div className="bg-item px-6 sm:px-10 md:px-14 sm:ps-12 md:ps-16 min-h-[200px] sm:min-h-[240px] md:min-h-[260px] flex items-center justify-center w-full sm:w-auto">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-[30px] text-center">
                      {story.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
