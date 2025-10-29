import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTAFormSection from "@/components/CTAFormSection";
import StickyCTA from "@/components/StickyCTA";
import { type InsertNotification } from "@shared/schema";

export default function Home() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = async (data: InsertNotification) => {
    console.log("Form submitted:", data);
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <div className="min-h-screen">
      <HeroSection onCTAClick={scrollToForm} />
      <StorySection />
      <HowItWorksSection />
      <TestimonialsSection />
      <div ref={formRef}>
        <CTAFormSection onSubmit={handleFormSubmit} id="signup-form" />
      </div>
      <StickyCTA onClick={scrollToForm} />
    </div>
  );
}
