import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "김민준",
    role: "기부자 (직장인 5년차)",
    initial: "김",
    quote: "예전의 내가 그랬듯, 누군가에게 힘이 될 수 있어 행복했어요.",
  },
  {
    name: "이서연",
    role: "수혜자 (대학생)",
    initial: "이",
    quote: "밥 한 끼 덕분에 오늘 하루를 버틸 수 있었어요. 고맙습니다.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          누구나 누군가의<br className="md:hidden" /> 따뜻한 롤모델이 될 수 있습니다.
        </h2>
        
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="secondary" className="text-base px-6 py-2">
            지금까지 1,247명의 직장인이 온기에 함께했어요
          </Badge>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-card-border hover-elevate transition-all"
              data-testid={`card-testimonial-${index + 1}`}
            >
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              
              <p className="text-lg text-card-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {testimonial.initial}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
