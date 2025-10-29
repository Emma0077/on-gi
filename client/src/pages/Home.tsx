import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FormModal from "@/components/FormModal";
import StickyCTA from "@/components/StickyCTA";
import { type InsertNotification } from "@shared/schema";
import { initUTMTracking, getSavedUTMParams } from "@/lib/utm";
import { trackCTAClick, trackCompleteRegistration } from "@/lib/analytics";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Initialize UTM tracking on page load
    initUTMTracking();
  }, []);

  const openModal = (location: 'header' | 'hero' | 'sticky') => {
    trackCTAClick(location);
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (data: InsertNotification) => {
    try {
      // Get saved UTM parameters
      const utmParams = getSavedUTMParams();
      
      // Combine form data with UTM parameters
      const payload = {
        ...data,
        ...utmParams,
      };

      // Submit to backend API
      const response = await apiRequest('POST', '/api/notifications', payload);

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Track conversion events AFTER successful DB save
      trackCompleteRegistration({
        email: data.email,
        name: data.name,
      });

      toast({
        title: "신청이 완료되었습니다!",
        description: "온기의 오픈 소식을 가장 먼저 전해드리겠습니다.",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "오류가 발생했습니다",
        description: "다시 시도해주세요.",
        variant: "destructive",
      });
      throw error;
    }
  };

  return (
    <div className="min-h-screen">
      <Header onCTAClick={() => openModal('header')} />
      <div className="pt-[72px]">
        <HeroSection onCTAClick={() => openModal('hero')} />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
      </div>
      <StickyCTA onClick={() => openModal('sticky')} />
      <FormModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
        onSubmit={handleFormSubmit} 
      />
    </div>
  );
}
