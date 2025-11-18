'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  FaBrain,
  FaChartLine,
  FaMicrophone,
  FaRobot,
  FaShieldAlt,
} from 'react-icons/fa';
import { IoTriangleOutline, IoTriangle } from "react-icons/io5";

const services = [
  {
    title: 'تجارب الواقع المعزز والافتراضي (AR & VR)',
    description: 'صالات عرض افتراضية، جولات 360°، وتجارب تفاعلية غير تقليدية لعملائك',
    icon: FaMicrophone,
    hoverImage: '/pics/services-robot.png',
  },
  {
    title: 'استراتيجية العلامة والإبداع الإبداعي',
    description: 'بناء هوية قوية واستراتيجيات إبداعية تُحدث فارقاً',
    icon: FaBrain,
    hoverImage: '/pics/Mask Group 7.png',
  },
  {
    title: 'إدارة الفعاليات والمعارض',
    description: 'تنظيم فعاليات مميزة بأحدث التقنيات والتنفيذ المحترف',
    icon: FaChartLine,
    hoverImage: '/pics/Mask Group 8.png',
  },
  {
    title: 'التسويق بالهولوجرام',
    description: 'عروض هولوغرافيك مذهلة تجذب الأنظار في أي مكان',
    icon: FaRobot,
    hoverImage: '/pics/Mask Group 9.png',
  },
  {
    title: 'التسويق الرقمي',
    description: 'حملات رقمية مدروسة تحقق أعلى عائد على الاستثمار',
    icon: FaShieldAlt,
    hoverImage: '/pics/Mask Group 17.png',
  },
];

const DEFAULT_ROBOT = '/pics/services-robot.png';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const currentRobotImage =
    hoveredIndex >= 0 ? services[hoveredIndex]?.hoverImage ?? DEFAULT_ROBOT : DEFAULT_ROBOT;

  return (
    <section id="services" className="py-12 sm:py-20 lg:py-28 services  min-h-[120vh]  text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-purple-600/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Services List */}
          <div className="order-2 md:order-1">
            <header className="text-right">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
                خدماتنا
              </h2>
              <div className="relative inline-block">
                <div className="w-20 h-2 bg-white rounded-xl"></div>
                <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-[#33BEF2] rounded-full border-4 border-[#530073]" />
              </div>
              <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-[#f9f7fbd5]">
                تكنولوجيا إبداعية، نتائج واقعية
              </p>
            </header>

            <div className="space-y-0">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isHovered = hoveredIndex === index;
                const isLast = index === services.length - 1;

                return (
                  <div
                    key={index}
                    className="group"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(-1)}
                  >
                    <div
                      className={`flex items-center gap-6 pr-6 py-6 transition-all duration-500 border-b border-purple-500/20 ${
                        isLast ? 'border-b-0' : ''
                      } ${isHovered ? 'bg-purple-800/20 rounded-2xl -mx-4 px-4 shadow-2xl shadow-purple-900/50' : ''}`}
                    >
                      {/* Triangle Icon - يتحول لمملوء عند الـ hover */}
                      {isHovered ? (
                        <IoTriangle className="text-4xl text-white -rotate-90 flex-shrink-0" />
                      ) : (
                        <IoTriangleOutline className="text-3xl text-white  -rotate-90 flex-shrink-0" />
                      )}

                      {/* Service Icon - يكبر ويتغير لونه عند الـ hover */}
                      <Icon
                        className={`flex-shrink-0 transition-all duration-500 ${
                          isHovered
                            ? 'text-5xl text-[#33BEF2] scale-110'
                            : 'text-4xl text-white'
                        }`}
                      />

                      <div className="  flex-1">
                        <h3 className={`font-bold text-[#F9F7FB] transition-all text-2xl duration-300  `}>
                          {service.title}
                        </h3>

                        {/* الوصف يظهر فقط عند الـ hover */}
                        <p
                          className={`mt-3 text-lg text-white/60 overflow-hidden transition-all duration-700 ease-in-out ${
                            isHovered
                              ? 'max-h-32 opacity-100'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Robot Image */}
          <div className="relative flex justify-center items-center order-1 md:order-2 min-h-[500px]">
           {/* Background Decorative Image */}
            <Image
              src="/Group9891.png"
              width={800}
              height={800}
              alt="Background"
              className="absolute inset-0 transform-[translateY(-32%)_translateX(6%)] min-h-[800px] w-full h-full object-contain z-0"
            />

            {/* Dynamic Robot */}
            <Image
              src={currentRobotImage}
              width={520}
              height={520}
              alt="خدمات الروبوت"
              className="relative z-10 w-full max-w-[396px] object-contain transition-opacity duration-500"
              priority
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-20">
        <button className="px-12 py-5 border-2 border-white/80 rounded-full text-xl font-bold hover:bg-white hover:text-purple-900 transition-all duration-300 shadow-xl hover:shadow-purple-600/50">
          ابدأ معنا الآن
        </button>
      </div>
    </section>
  );
}