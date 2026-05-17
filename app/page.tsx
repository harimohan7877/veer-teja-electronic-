import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import BackToTop from '@/components/shared/BackToTop';
import HeroSection from '@/components/home/HeroSection';
import MarqueeBar, { BrandsStrip } from '@/components/home/MarqueeBar';
import CategoriesSection from '@/components/home/CategoriesSection';
import ProductsSection from '@/components/home/ProductsSection';
import ServicesSection from '@/components/home/ServicesSection';
import StatsCounter from '@/components/home/StatsCounter';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeBar />
        <CategoriesSection />
        <ProductsSection />
        <ServicesSection />
        <StatsCounter />
        <TestimonialsSection />
        <BrandsStrip />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}