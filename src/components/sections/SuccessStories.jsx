"use client";

import { useEffect, useRef } from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';

export default function SuccessStories() {
  const { t, i18n } = useTranslation();
  const swiperRef = useRef(null);

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

  // Reset Swiper when language changes and refresh AOS
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
      swiperRef.current.slideTo(0);
    }
    // Refresh AOS animations after language change
    const refreshTimer = setTimeout(() => {
      if (typeof window !== 'undefined' && AOS) {
        AOS.refresh();
      }
    }, 200);

    return () => clearTimeout(refreshTimer);
  }, [i18n.language]);

  // Refresh AOS when component mounts and after Swiper initializes
  useEffect(() => {
    const timer1 = setTimeout(() => {
      if (typeof window !== 'undefined' && AOS) {
        AOS.refresh();
      }
    }, 300);

    // Also refresh after Swiper is ready
    const timer2 = setTimeout(() => {
      if (typeof window !== 'undefined' && AOS && swiperRef.current) {
        AOS.refresh();
      }
    }, 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="SuccessStories pb-8 sm:pb-12 md:pb-16 lg:pb-24 pt-12 sm:pt-16 md:pt-24 lg:pt-32 xl:pt-[150px]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5 text-[#60008E] px-2">
            {t('successStories.title')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#33BEF2] max-w-3xl mx-auto px-3 sm:px-4 md:px-6">
            {t('successStories.subtitle')}
          </p>
        </div>

        <div className="max-w-[965.67px] mx-auto pb-6 sm:pb-8 md:pb-12 lg:pb-16" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
          <Swiper
            key={i18n.language}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              // Refresh AOS after Swiper is initialized
              setTimeout(() => {
                if (typeof window !== 'undefined' && AOS) {
                  AOS.refresh();
                }
              }, 100);
            }}
            onSlideChange={() => {
              // Refresh AOS when slide changes
              setTimeout(() => {
                if (typeof window !== 'undefined' && AOS) {
                  AOS.refresh();
                }
              }, 50);
            }}
            modules={[Pagination, Autoplay]}
            spaceBetween={15}
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
            breakpoints={{
              480: {
                spaceBetween: 20,
              },
              640: {
                spaceBetween: 25,
              },
              768: {
                spaceBetween: 30,
              },
              1024: {
                spaceBetween: 30,
              },
            }}
            className="success-stories-custom-swiper"
          >
            {stories.map((story, index) => (
              <SwiperSlide key={story.id}>
                <div 
                  className="text-white flex flex-col sm:flex-row mx-1 sm:mx-2 md:mx-4 lg:mx-[50px] items-end sm:items-end relative gap-3 sm:gap-4 md:gap-6 lg:gap-0"
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
                  data-aos-once="true"
                >
                  {/* Company Card - Right Side */}
                  <div className="flex bg-card-white relative sm:-bottom-2 md:-bottom-3 sm:-end-6 md:-end-9 z-10 w-full sm:min-w-[180px] md:min-w-[240px] lg:min-w-[280px] xl:min-w-[314.8px] sm:w-fit items-center p-4 sm:p-5 md:p-6 lg:p-8 xl:p-[35px_55px_42px] flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                    <Image
                      width={188}
                      height={188}
                      src={story.logo}
                      alt={story.companyName}
                      className="w-[60px] h-[60px] min-[375px]:w-[70px] min-[375px]:h-[70px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] xl:w-[188px] xl:h-[188px] object-cover rounded-[50%]"
                    />
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#6B2A98] text-center font-bold mb-0 sm:mb-1 px-1">
                      {story.companyName}
                    </h3>
                  </div>

                  {/* Thumb Icon */}
                  <Image
                    width={188}
                    height={188}
                    src={story.thumbIcon}
                    alt="Success Icon"
                    className="absolute hidden sm:block end-[-20px] sm:end-[-30px] md:end-[-40px] lg:end-[-50px] xl:end-[-65px] top-0 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[120px] lg:h-[120px] xl:w-[150px] xl:h-[150px] object-contain z-10"
                    aria-hidden="true"
                  />

                  {/* Description Card - Left Side */}
                  <div className="bg-item px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 sm:ps-8 md:ps-10 lg:ps-12 xl:ps-16 min-h-[160px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[240px] xl:min-h-[260px] flex items-center justify-center w-full sm:w-auto py-4 sm:py-6">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[30px] text-center leading-relaxed px-2 sm:px-0">
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
