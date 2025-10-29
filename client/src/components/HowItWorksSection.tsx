import { Card } from "@/components/ui/card";
import { Gift, Utensils, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: Gift,
    title: "한 끼 기부",
    description: "당신의 따뜻한 마음을 한 끼의 식사로 전달합니다.",
  },
  {
    icon: Utensils,
    title: "청년 식사권 수령",
    description: "노력하는 청년이 따뜻한 식사를 받습니다.",
  },
  {
    icon: MessageCircle,
    title: "감사 메시지 피드백",
    description: "청년의 진심 어린 감사 메시지를 받아보세요.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          한 끼의 온기가 이렇게 전달됩니다.
        </h2>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 text-lg">
          간단한 세 단계로 따뜻한 연결이 시작됩니다
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className="p-8 text-center hover-elevate transition-all duration-300 bg-card border-card-border"
                data-testid={`card-step-${index + 1}`}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <div className="mb-2 text-sm font-medium text-primary">
                  STEP {index + 1}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-card-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
