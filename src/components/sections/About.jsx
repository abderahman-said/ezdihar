"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-12 sm:py-20 lg:py-24   relative overflow-hidden bg-[#F9F7FB]"
    >
      <div className="absolute top-10 sm:top-20 right-5 sm:right-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-purple-100 rounded-full blur-3xl opacity-40 z-[1]"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-20 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-blue-100 rounded-full blur-3xl opacity-30 z-[1]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            <span className="text-[#33BEF2]">{t("about.title")}</span>{" "}
            <span className="text-[#530073]">{t("about.companyName")}</span>
          </h2>
          <div
            className="
  relative w-20 h-2 bg-[#530073] rounded-xl mx-auto mt-4
  before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2
  before:-left-2 before:w-4 before:h-4 before:bg-[#33BEF2]
  before:rounded-full before:border-2 before:border-white
"
          ></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Robot Image */}
          <div className="flex justify-center items-center mt-8 md:mt-0">
            <div className="relative w-full max-w-sm lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <Image
                src="/abut.png"
                alt={t('about.heading')}
                width={500}
                height={500}
                className="relative w-full drop-shadow-2xl object-contain z-10"
              />
            </div>
          </div>
          {/* Content */}
          <div className="space-y-4 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#530073] leading-tight">
              {t("about.heading")}
            </h3>
            <p className="text-[#707070] leading-relaxed text-base sm:text-lg lg:text-xl">
              {t("about.description")}
            </p>

            <div className="space-y-3 sm:space-y-4 md:space-y-6 pt-2 sm:pt-4">
              <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                <Image src={"/Group 66136.png"} alt="team icon" width={35} height={35} className="w-[35px] h-[35px] object-contain" aria-hidden="true" />

                   <p className="text-[#707070] text-sm sm:text-lg font-medium">
                    {t('about.location')}
                  </p>
                
                
              </div>

              <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                <Image src={"/g1083.png"} alt="team icon" width={35} height={35} className="w-[35px] h-[35px] object-contain" aria-hidden="true" />

             
                  <p className="text-[#707070] text-sm sm:text-lg font-medium">
                    {t('about.stats')}
                  </p>
                 
              </div>

              <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                <Image src={"/Group 66137.png"} alt="team icon" width={35} height={35} className="w-[35px] h-[35px] object-contain" aria-hidden="true" />

                
                  <p className="text-[#707070] text-sm sm:text-lg font-medium">
                    {t('about.team')}
                  </p>
                
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
}
