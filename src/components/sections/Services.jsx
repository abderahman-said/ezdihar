'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import {
  FaBrain,
  FaChartLine,
  FaMicrophone,
  FaRobot,
  FaShieldAlt,
} from 'react-icons/fa';
import { IoTriangleOutline, IoTriangle } from "react-icons/io5";

export default function Services() {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const services = [
    {
      title: t('services.items.arVr.title'),
      description: t('services.items.arVr.description'),
      icon: FaMicrophone,
      hoverImage: '/pics/services-robot.png',
    },
    {
      title: t('services.items.branding.title'),
      description: t('services.items.branding.description'),
      icon: FaBrain,
      hoverImage: '/pics/Mask Group 7.png',
    },
    {
      title: t('services.items.events.title'),
      description: t('services.items.events.description'),
      icon: FaChartLine,
      hoverImage: '/pics/Mask Group 8.png',
    },
    {
      title: t('services.items.hologram.title'),
      description: t('services.items.hologram.description'),
      icon: FaRobot,
      hoverImage: '/pics/Mask Group 9.png',
    },
    {
      title: t('services.items.digital.title'),
      description: t('services.items.digital.description'),
      icon: FaShieldAlt,
      hoverImage: '/pics/Mask Group 17.png',
    },
  ];

  const DEFAULT_ROBOT = '/pics/services-robot.png';
  const currentRobotImage =
    hoveredIndex >= 0 ? services[hoveredIndex]?.hoverImage ?? DEFAULT_ROBOT : DEFAULT_ROBOT;

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-28 services min-h-[100vh] sm:min-h-[120vh] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-purple-600/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Services List */}
          <div className="order-2 md:order-1">
            <header className="text-center sm:text-right mb-6 sm:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                {t('services.title')}
              </h2>
              <div className="relative inline-block">
                <div className="w-16 sm:w-20 h-2 bg-white rounded-xl"></div>
                <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-[#33BEF2] rounded-full border-2 sm:border-4 border-[#530073]" />
              </div>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-[#f9f7fbd5]">
                {t('services.subtitle')}
              </p>
            </header>

            <div className="space-y-0 mt-4 sm:mt-0">
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
                      className={`flex items-center gap-3 sm:gap-4 md:gap-6 pr-3 sm:pr-4 md:pr-6 py-4 sm:py-5 md:py-6 transition-all duration-500 border-b border-purple-500/20 ${
                        isLast ? 'border-b-0' : ''
                      } ${isHovered ? 'bg-purple-800/20 rounded-xl sm:rounded-2xl -mx-2 sm:-mx-4 px-2 sm:px-4 shadow-2xl shadow-purple-900/50' : ''}`}
                    >
                      {/* Triangle Icon */}
                      {isHovered ? (
                        <IoTriangle className="text-2xl sm:text-3xl md:text-4xl text-white -rotate-90 shrink-0" aria-hidden="true" />
                      ) : (
                        <IoTriangleOutline className="text-xl sm:text-2xl md:text-3xl text-white -rotate-90 shrink-0" aria-hidden="true" />
                      )}

                      {/* Service Icon */}
                      <Icon
                        className={`shrink-0 transition-all duration-500 ${
                          isHovered
                            ? 'text-3xl sm:text-4xl md:text-5xl text-[#33BEF2] scale-110'
                            : 'text-2xl sm:text-3xl md:text-4xl text-white'
                        }`}
                        aria-hidden="true"
                      />

                      <div className="flex-1 min-w-0">
                        <h3 className={`font-bold text-[#F9F7FB] transition-all text-base sm:text-lg md:text-xl lg:text-2xl duration-300`}>
                          {service.title}
                        </h3>

                        {/* Description appears only on hover */}
                        <p
                          className={`mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-white/60 overflow-hidden transition-all duration-700 ease-in-out ${
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
          <div className="relative flex justify-center items-center order-1 md:order-2 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] mb-8 sm:mb-0">
            {/* Background Decorative Image */}
            <Image
              src="/Group9891.png"
              width={800}
              height={800}
              alt="Background"
              className="absolute inset-0 transform-[translateY(-32%)_translateX(6%)] min-h-[400px] sm:min-h-[600px] md:min-h-[800px] w-full h-full object-contain z-0 opacity-50 sm:opacity-100"
            />

            {/* Dynamic Robot */}
            <Image
              src={currentRobotImage}
              width={520}
              height={520}
              alt={t('services.title')}
              className="relative z-10 w-full max-w-[250px] sm:max-w-[320px] md:max-w-[396px] object-contain transition-opacity duration-500"
              priority
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-8 sm:mt-12 md:mt-20">
        <button className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 border-2 border-white/80 rounded-full text-base sm:text-lg md:text-xl font-bold hover:bg-white hover:text-purple-900 transition-all duration-300 shadow-xl hover:shadow-purple-600/50 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
          {t('services.button')}
        </button>
      </div>
    </section>
  );
}
