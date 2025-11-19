"use client";

import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const swiperRef = useRef(null);
  const [key, setKey] = useState(0);

  const stories = [
    {
      id: 1,
      logo: "/NoPath.png",
      title: t('testimonials.items.1.quote'),
      name: t('testimonials.items.1.name'),
      position: t('testimonials.items.1.position'),
    },
    {
      id: 2,
      logo: "/NoPath.png",
      title: t('testimonials.items.2.quote'),
      name: t('testimonials.items.2.name'),
      position: t('testimonials.items.2.position'),
    },
    {
      id: 3,
      logo: "/NoPath.png",
      title: t('testimonials.items.3.quote'),
      name: t('testimonials.items.3.name'),
      position: t('testimonials.items.3.position'),
    },
    {
      id: 4,
      logo: "/NoPath.png",
      title: t('testimonials.items.4.quote'),
      name: t('testimonials.items.4.name'),
      position: t('testimonials.items.4.position'),
    },
  ];

  // Reset Swiper when language changes
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
      swiperRef.current.slideTo(0);
    }
    // Force re-render to update direction
    setKey(prev => prev + 1);
  }, [i18n.language]);

  return (
    <section className="Testimonials relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#60008E]">
            {t('testimonials.title')}
          </h2>

          <div
            className="
              relative w-20 h-2 bg-[#530073] rounded-xl mx-auto mt-4
              before:content-[''] before:absolute before:top-1/2
              before:-translate-y-1/2 before:-left-2 before:w-4
              before:h-4 before:bg-[#33BEF2] before:rounded-full
              before:border-2 before:border-white
            "
            aria-hidden="true"
          />

          <p className="text-lg sm:text-2xl text-[#33BEF2] max-w-3xl mx-auto mt-4">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Background Image */}
        <Image
          width={2000}
          height={800}
          src="/Mask Group 15.png"
          alt="Background"
          className="absolute left-0 bottom-0 w-full h-[80%] object-cover"
          aria-hidden="true"
        />

        {/* Slider */}
        <div className="max-w-[1109px] mx-auto relative z-10">
          <Swiper
            key={key}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet custom-success-bullet",
              bulletActiveClass:
                "swiper-pagination-bullet-active custom-success-bullet-active",
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="success-stories-custom-swiper"
          >
            {stories.map((story) => (
              <SwiperSlide key={story.id}>
                <div className="text-white py-6 sm:py-8 md:py-10 flex flex-col sm:flex-row mx-2 sm:mx-4 md:mx-[50px] items-end relative gap-4 sm:gap-0">

                  {/* Quote icon */}
                  <FaQuoteLeft className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#530073] absolute top-4 sm:top-8 md:top-[60px] end-4 sm:end-8 md:end-[70px] z-10" aria-hidden="true" />

                  {/* Image */}
                  <Image
                    width={326}
                    height={360}
                    src="/Group 132970.png"
                    alt="Testimonial"
                    className="w-[150px] h-[150px] sm:w-[200px] sm:h-[220px] md:w-[280px] md:h-[310px] lg:w-[326px] lg:h-[360px] relative sm:-bottom-2 sm:-end-9 z-[1] mx-auto sm:mx-0"
                  />

                  {/* Text Block */}
                  <div className="bg-item-2 px-6 sm:px-10 md:px-14 sm:ps-12 md:ps-16 min-h-[200px] sm:min-h-[250px] md:min-h-[317px] flex flex-col justify-center w-full sm:w-auto">
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-[24px] text-[#000000bc] pb-2 sm:pb-3">{story.title}</h4>
                    <h5 className="text-base sm:text-lg md:text-[20px] text-[#530073] pb-1">{story.name}</h5>
                    <h6 className="text-sm sm:text-base md:text-[19px] text-[#707070]">{story.position}</h6>
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
