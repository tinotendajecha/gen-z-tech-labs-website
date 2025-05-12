import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';
import FloatingCta from '@/components/ui/FloatingCta';
import TechStackSection from '@/components/sections/TechStackSection';
import FlexiblePlansSection from '@/components/sections/FlexiblePlansSection';

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      {/* <PortfolioSection />
      <TechStackSection /> */}
      <FlexiblePlansSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <FloatingCta />
    </>
  );
}