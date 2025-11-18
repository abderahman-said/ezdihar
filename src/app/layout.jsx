import localFont from "next/font/local";
import "./globals.css";
import I18nProvider from "../components/I18nProvider";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import LoadingScreen from "@/components/layout/LoadingScreen";

// Load GE SS Two font
const geSsTwo = localFont({
  src: [
    {
      path: "../../public/ArbFONTS-GE_Contrast_Bold_2.otf",
      weight: "800",
      style: "normal",
    },
{
      path: "../../public/ArbFONTSMedium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-ge-ss-two",
});
export const metadata = {
  title: "Izdhar - Technology Beyond Imagination",
  description: "Izdhar - AI Technology Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geSsTwo.variable} font-sans antialiased`}
      >
        <LoadingScreen />
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}