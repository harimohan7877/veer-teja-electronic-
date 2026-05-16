import type { Metadata } from "next";
import { Noto_Sans_Devanagari, Poppins } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_Devanagari({
  variable: "--font-noto",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: 'वीर तेजा इलेक्ट्रॉनिक & रिपेयरिंग सेंटर | Cooler Fan Fridge Repair Rajasthan',
    template: '%s | वीर तेजा इलेक्ट्रॉनिक',
  },
  description: 'वीर तेजा इलेक्ट्रॉनिक सेंटर में कूलर, पंखा, फ्रिज, वाशिंग मशीन, इन्वेर्टर की मरम्मत और बिक्री। Cooler Fan Fridge Washing Machine Inverter Repair in Rajasthan. थोक और खुदरा सामान उपलब्ध।',
  keywords: ['cooler repair rajasthan', 'पंखा मरम्मत', 'fridge repair', 'inverter battery', 'electronics shop rajasthan', 'वीर तेजा', 'washing machine repair'],
  openGraph: {
    title: 'वीर तेजा इलेक्ट्रॉनिक & रिपेयरिंग सेंटर',
    description: 'कूलर, पंखा, फ्रिज, वाशिंग मशीन मरम्मत | थोक व खुदरा इलेक्ट्रॉनिक सामान',
    type: 'website',
    locale: 'hi_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className={`${notoSans.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}