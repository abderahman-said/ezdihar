"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';


export default function SuccessStories() {
  const stories = [
    {
      id: 1,
      logo: '/NoPath.png',
      companyName: 'الفلاح العقارية',
      thumbIcon: '/ef4018b0-494b-4b98-a5f4-2b8441ea3074.png',
      description: 'زيادة التفاعل بنسبة 60% عبر صالة عرض افتراضية بزاوية 360°.',
    },
    {
      id: 2,
      logo: '/NoPath.png',
      companyName: 'شركة المستقبل',
      thumbIcon: '/ef4018b0-494b-4b98-a5f4-2b8441ea3074.png',
      description: 'زيادة المبيعات بنسبة 200% من خلال التسويق الرقمي المتكامل.',
    },
    {
      id: 3,
      logo: '/NoPath.png',
      companyName: 'مجموعة الابتكار',
      thumbIcon: '/ef4018b0-494b-4b98-a5f4-2b8441ea3074.png',
      description: 'تحسين تجربة العملاء بنسبة 150% عبر تقنيات الذكاء الاصطناعي.',
    },
    {
      id: 4,
      logo: '/NoPath.png',
      companyName: 'شركة التطوير',
      thumbIcon: '/ef4018b0-494b-4b98-a5f4-2b8441ea3074.png',
      description: 'نمو الإيرادات بنسبة 180% باستخدام استراتيجيات التسويق الحديثة.',
    }
  ];

  return (
    <section className="  SuccessStories   pb-24 pt-[150px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#60008E]">
            دراسات الحالة
          </h2>
          <p className="text-lg sm:text-2xl text-[#33BEF2] max-w-3xl mx-auto">
            قصص نجاح تتحدث عن نفسها
          </p>
        </div>

        <div className="max-w-[965.67px] mx-auto pb-16">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
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
                <div className="text-white flex mx-[50px] items-end relative">
                  {/* Company Card - Right Side */}
                  <div className="flex bg-card-white relative -bottom-3 -end-9 z-[1] min-w-[314.8px] justify-center w-fit items-center p-[35px_55px_42px] flex-col gap-4 sm:gap-6">
                    <Image
                      width={188}
                      height={188}
                      src={story.logo}
                      alt={story.companyName}
                      className="w-[100px] h-[100px] sm:w-[188px] sm:h-[188px] object-cover rounded-[50%]"
                    />
                    <h3 className="text-xl sm:text-2xl text-[#6B2A98] text-center font-bold mb-1">
                      {story.companyName}
                    </h3>
                  </div>

                  {/* Thumb Icon */}
                  <Image
                    width={188}
                    height={188}
                    src={story.thumbIcon}
                    alt="Success Icon"
                    className="absolute end-[-65px] top-0 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] object-contain"
                  />

                  {/* Description Card - Left Side */}
                  <div className="bg-item px-14 ps-16 min-h-[260px] flex items-center justify-center">
                    <p className="text-[30px] text-center">
                      {story.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .success-stories-custom-swiper {
          padding-bottom: 50px;
        }

        .success-stories-custom-swiper .swiper-pagination {
          bottom: 0 !important;
        }

        .custom-success-bullet {
          width: 12px;
          height: 12px;
          background: transparent;
          opacity: 1;
          transition: all 0.3s ease;
          margin: 0 6px !important;
          border: 2px solid #707070;
        }

        .custom-success-bullet-active {
          background: #6B2A98;
          width: 32px;
          border-radius: 6px;
          border: 2px solid #6B2A98;
        }

        /* Ensure proper RTL support */
        .success-stories-custom-swiper .swiper-wrapper {
          direction: rtl;
        }

        @media (max-width: 640px) {
          .success-stories-custom-swiper {
            padding-bottom: 40px;
          }

          .custom-success-bullet {
            width: 10px;
            height: 10px;
          }

          .custom-success-bullet-active {
            width: 24px;
          }
        }
      `}</style>
    </section>
  );
}