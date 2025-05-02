
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";
import ConsentPopup from "@/components/ConsentPopup";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Postcard Maker GPT - AI-Powered Postcard Design Tool";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <HowItWorks />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
        <DisclaimerSection />
        <CTASection />
      </main>
      
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
