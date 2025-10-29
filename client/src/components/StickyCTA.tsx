import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

interface StickyCTAProps {
  onClick: () => void;
}

export default function StickyCTA({ onClick }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background via-background to-transparent md:hidden">
      <Button 
        size="lg"
        onClick={onClick}
        className="w-full text-lg py-6 rounded-xl shadow-xl"
        data-testid="button-sticky-cta"
      >
        온기 오픈 알림받기
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </div>
  );
}
