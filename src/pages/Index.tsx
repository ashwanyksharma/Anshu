import HeroSection from "@/components/HeroSection";
import CreatorsSection from "@/components/CreatorsSection";
import ClaritySection from "@/components/ClaritySection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CreatorsSection />
      <ClaritySection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
