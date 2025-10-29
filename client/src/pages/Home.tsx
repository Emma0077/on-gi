import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FormModal from "@/components/FormModal";
import StickyCTA from "@/components/StickyCTA";
import { type InsertNotification } from "@shared/schema";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (data: InsertNotification) => {
    console.log("Form submitted:", data);
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <div className="min-h-screen">
      <Header onCTAClick={openModal} />
      <div className="pt-[72px]">
        <HeroSection onCTAClick={openModal} />
        <HowItWorksSection />
        <TestimonialsSection />
      </div>
      <StickyCTA onClick={openModal} />
      <FormModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
        onSubmit={handleFormSubmit} 
      />
    </div>
  );
}
