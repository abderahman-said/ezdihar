import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import I18nProvider from "../components/I18nProvider";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import AOS styles
import 'aos/dist/aos.css';
import LoadingScreen from "@/components/layout/LoadingScreen";
import HtmlAttributes from "../components/HtmlAttributes";
import SkipToContent from "../components/SkipToContent";

// Load Arabic font (GE SS Two)
const geSsTwo = localFont({
  src: [
    {
      path: "../../public/ArbFONTS-GE_SS_Two_Bold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/ArbFONTS-GE-SS-Two-Light.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-arabic",
  display: "swap",
});

// Load English font (Inter)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-english",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Izdhar - Technology Beyond Imagination",
    template: "%s | Izdhar"
  },
  description: "Izdhar - AI Technology Solutions and Intelligent Marketing. We develop technology with expertise in business management and human resources on artificial intelligence.",
  keywords: ["AI", "Artificial Intelligence", "Technology", "Saudi Arabia", "Big Data", "Smart Applications", "إزدهار", "ذكاء اصطناعي", "تكنولوجيا"],
  authors: [{ name: "Izdhar" }],
  creator: "Izdhar",
  publisher: "Izdhar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://izdhar.com'),
  alternates: {
    canonical: '/',
    languages: {
      'ar': '/ar',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    alternateLocale: 'en_US',
    url: '/',
    siteName: 'Izdhar',
    title: 'Izdhar - Technology Beyond Imagination',
    description: 'Izdhar - AI Technology Solutions and Intelligent Marketing',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Izdhar Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Izdhar - Technology Beyond Imagination',
    description: 'Izdhar - AI Technology Solutions and Intelligent Marketing',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://izdhar.com';
  
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="canonical" href={baseUrl} />
        <link rel="alternate" hrefLang="ar" href={`${baseUrl}/ar`} />
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
        <link rel="alternate" hrefLang="x-default" href={baseUrl} />
      </head>
      <body
        className={`${geSsTwo.variable} ${inter.variable} font-sans antialiased`}
      >
        <SkipToContent />
        <LoadingScreen />
        <I18nProvider>
          <HtmlAttributes />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}