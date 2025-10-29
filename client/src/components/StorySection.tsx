import { Card } from "@/components/ui/card";
import connectedHandsImage from "@assets/generated_images/Connected_hands_warmth_illustration_b227f9ee.png";

export default function StorySection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          왜 '온기'가 필요한가요?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <img 
              src={connectedHandsImage} 
              alt="연결되는 온기" 
              className="w-full rounded-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              하루 한 끼는 편의점 삼각김밥이 전부인 청년들.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              누군가의 따뜻한 한 끼가 그들에게 내일을 살아낼 힘이 됩니다.
            </p>
          </div>
        </div>
        
        <Card className="p-8 md:p-12 bg-accent/50 border-accent-border text-center">
          <p className="text-xl md:text-2xl font-medium text-accent-foreground italic leading-relaxed">
            "그때 누군가 나를 도와줬다면…<br className="hidden md:block" />
            지금 나는 온기로 보답할 수 있습니다."
          </p>
        </Card>
      </div>
    </section>
  );
}
