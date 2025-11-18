'use client';

import { useLanguage } from '@/hooks/useLanguage';
import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Dynamic imports for sections
const Hero = dynamic(() => import('@/components/sections/Hero'));
const About = dynamic(() => import('@/components/sections/About'));
const ChangeLandUse = dynamic(() => import('@/components/sections/ChangeLandUse'));
const Services = dynamic(() => import('@/components/sections/Services'));
const SuccessStories = dynamic(() => import('@/components/sections/SuccessStories'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));
const CTA = dynamic(() => import('@/components/sections/CTA'));
const Contact = dynamic(() => import('@/components/sections/Contact'));

export default function IzdharWebsite() {
  const { dir } = useLanguage();

  return (
    <div className="min-h-screen bg-white" dir={dir}>
      <Header />
      <Hero />
      <About />
      <Services />
      <ChangeLandUse />
      <SuccessStories />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
