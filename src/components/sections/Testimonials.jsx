"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

 
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const stories = [
    {
      id: 1,
      logo: "/NoPath.png",
      title: "“العمل مع إزدهار يشبه العمل مع المستقبل كل مشروع يفوق التوقعات”",
      name: "أ/ احمد الزين",
      position: "CEO Manger ELFalah Realestate",
    },
    {
      id: 2,
      logo: "/NoPath.png",
      title: "“خدمة ممتازة وسرعة في الإنجاز وفريق عمل محترف جدًا”",
      name: "أ/ محمود حسين",
      position: "Founder MH Group",
    },
    {
      id: 3,
      logo: "/NoPath.png",
      title: "“شغل احترافي وملتزمين بالمواعيد… تجربة رائعة فعلًا”",
      name: "أ/ ياسر سامي",
      position: "General Manager YS Agency",
    },
    {
      id: 4,
      logo: "/NoPath.png",
      title: "“إزدهار هي الشريك المثالي لنمو أعمالنا… ننصح بهم بشدة”",
      name: "أ/ علي الغامدي",
      position: "Owner AG Real Estate",
    },
  ];

  return (
    <section className="Testimonials relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#60008E]">
            آراء العملاء
          </h2>

          <div
            className="
              relative w-20 h-2 bg-[#530073] rounded-xl mx-auto mt-4
              before:content-[''] before:absolute before:top-1/2
              before:-translate-y-1/2 before:-left-2 before:w-4
              before:h-4 before:bg-[#33BEF2] before:rounded-full
              before:border-2 before:border-white
            "
          />

          <p className="text-lg sm:text-2xl text-[#33BEF2] max-w-3xl mx-auto mt-4">
            ماذا يقول عملاؤنا عنا.
          </p>
        </div>

        {/* Background Image */}
        <Image
          width={2000}
          height={800}
          src="/Mask Group 15.png"
          alt="Background"
          className="absolute left-0 bottom-0 w-full h-[80%] object-cover"
        />

        {/* Slider */}
        <div className="max-w-[1109px] mx-auto relative z-10">
          <Swiper
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
                <div className="text-white py-10 flex mx-[50px] items-end relative">

                  {/* Quote icon */}
                  <FaQuoteLeft className="text-3xl sm:text-4xl lg:text-5xl text-[#530073] absolute top-[60px] end-[70px]" />

                  {/* Image */}
                  <Image
                    width={326}
                    height={360}
                    src="/Group 132970.png"
                    alt="Testimonial"
                    className="w-[200px] h-[200px] sm:w-[326px] sm:h-[360px] relative -bottom-2 -end-9 z-[1]"
                  />

                  {/* Text Block */}
                  <div className="bg-item-2 px-14 ps-16 min-h-[317px] flex flex-col justify-center">
                    <h4 className="text-[24px] text-[#000000bc] pb-3">{story.title}</h4>
                    <h5 className="text-[20px] text-[#530073] pb-1">{story.name}</h5>
                    <h6 className="text-[19px] text-[#707070]">{story.position}</h6>
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
