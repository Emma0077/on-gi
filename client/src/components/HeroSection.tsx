import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Warm_dining_connection_scene_12be36f9.png";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/40 via-background/60 to-background z-0"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          나처럼 노력하는 청년에게,<br />
          따뜻한 한 끼를 선물하세요.
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          온기(ON:GI)는 세대 간 따뜻한 연결을 만드는 새로운 기부 플랫폼입니다.
        </p>
        
        <Button 
          size="lg"
          onClick={onCTAClick}
          className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover-elevate active-elevate-2"
          data-testid="button-hero-cta"
        >
          온기 오픈 알림받기
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
