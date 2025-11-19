'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaUser, FaRegCommentDots } from 'react-icons/fa';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert(t('contact.success'));
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-20 lg:py-24 contact relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-[1]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* Contact Info */}
          <div className="space-y-8 order-2 md:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              {t('contact.title')}
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-2xl text-[#33BEF2]" />
                <p className="text-lg text-[#FAF8F8]">{t('contact.location')}</p>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-2xl text-[#33BEF2]" />
                <p className="text-lg text-[#FAF8F8]">info@izdhar.sa</p>
              </div>

              <div className="flex items-start gap-4">
                <FaPhone className="text-2xl text-[#33BEF2]" />
                <p className="text-lg text-[#FAF8F8]">+966 000000</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="px-6 sm:px-10 md:px-16 py-8 sm:py-12 md:py-16 md:pt-20 contact-form order-1 md:order-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#530073] mb-4">
            <span className='me-2 bg-[#33BEF2] min-w-[16px] sm:min-w-[20px] inline-block rounded-3xl w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]'></span>  {t('contact.title')}
            </h3>
            <div
              className="
  relative w-16 sm:w-20 h-2 bg-[#530073] rounded-3xl mb-6 sm:mb-8 ms-[16px] sm:ms-[20px]
  before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2
  before:-left-2 before:w-3 before:h-3 sm:before:w-4 sm:before:h-4 before:bg-[#33BEF2]
  before:rounded-full before:border-2 before:border-white
"
            ></div>
            <div className="space-y-5">

              {/* Name */}
              <div className="relative">
                <FaUser
                  className={`absolute top-1/2 -translate-y-1/2 text-[#530073] text-lg sm:text-xl 
                  ${isRTL ? "right-3 sm:right-4" : "left-3 sm:left-4"}`}
                />
                <input
                  type="text"
                  name="name"
                  placeholder={t('contact.name')}
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full text-[#152F44] placeholder:text-[#152F44] bg-[#FFF7FE] border-2 border-[#DFDFDF] rounded-3xl 
                    px-10 sm:px-12 py-2.5 sm:py-3 md:py-4 focus:border-[#530073] transition text-base sm:text-lg`}
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <FaPhone
                  className={`absolute top-1/2 -translate-y-1/2 text-[#530073] text-lg sm:text-xl 
                  ${isRTL ? "right-3 sm:right-4" : "left-3 sm:left-4"}`}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t('contact.phone')}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full text-[#152F44] placeholder:text-[#152F44] border-2 bg-[#FFF7FE] border-[#DFDFDF] rounded-3xl px-10 sm:px-12 py-2.5 sm:py-3 md:py-4 focus:border-[#530073] transition text-base sm:text-lg"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope
                  className={`absolute top-1/2 -translate-y-1/2 text-[#530073] text-lg sm:text-xl 
                  ${isRTL ? "right-3 sm:right-4" : "left-3 sm:left-4"}`}
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.email')}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 text-[#152F44] placeholder:text-[#152F44] bg-[#FFF7FE] border-[#DFDFDF] rounded-3xl px-10 sm:px-12 py-2.5 sm:py-3 md:py-4 focus:border-[#530073] transition text-base sm:text-lg"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <FaRegCommentDots
                  className={`absolute top-4 sm:top-6 text-[#530073] text-lg sm:text-xl 
                  ${isRTL ? "right-3 sm:right-4" : "left-3 sm:left-4"}`}
                />
                <textarea
                  name="message"
                  placeholder={t('contact.message')}
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border-2 text-[#152F44] placeholder:text-[#152F44] bg-[#FFF7FE] border-[#DFDFDF] rounded-3xl px-10 sm:px-12 py-2.5 sm:py-3 md:py-4 focus:border-[#530073] transition resize-none text-base sm:text-lg"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full sm:w-fit px-6 sm:px-8 py-2.5 sm:py-2 text-[#530073] rounded-2xl border border-[#530073] transition font-semibold text-base sm:text-lg hover:bg-[#530073] hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2"
              >
                {t('contact.submit')}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
