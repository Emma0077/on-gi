import { useState, useEffect } from "react"; // useEffect 추가!
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertNotificationSchema, type InsertNotification } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckCircle2 } from "lucide-react";
import { trackCompleteRegistration } from "@/lib/analytics";

interface CTAFormSectionProps {
  onSubmit: (data: InsertNotification) => Promise<void>;
  id?: string;
}

export default function CTAFormSection({ onSubmit, id }: CTAFormSectionProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFromAd, setIsFromAd] = useState(false);
  
  const form = useForm<InsertNotification>({
    resolver: zodResolver(insertNotificationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const fbclid = urlParams.get('fbclid');
    const utmSource = urlParams.get('utm_source');
    
    if (fbclid || utmSource) {
      setIsFromAd(true);
      console.log('✅ User from Ad detected', { fbclid, utmSource });
    }
  }, []);

  const handleSubmit = async (data: InsertNotification) => {
    await onSubmit(data);
    
    // 광고에서 온 사용자만 페이스북 픽셀 이벤트 전송
    if (isFromAd) {
      trackCompleteRegistration({
        email: data.email,
        name: data.name,
      });
    } else {
      console.log('⚪ Skipping FB Pixel events (organic traffic)');
    }
    
    setIsSubmitted(true);
    form.reset();
  };

  if (isSubmitted) {
    return (
      <section id={id} className="py-16 md:py-24 px-6 bg-background">
        <div className="max-w-xl mx-auto text-center">
          <Card className="p-12 bg-card border-card-border">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">
              신청이 완료되었습니다!
            </h3>
            <p className="text-muted-foreground">
              온기의 오픈 소식을 가장 먼저 전해드리겠습니다.
            </p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          당신의 작은 다정이<br className="md:hidden" /> 세상을 바꿉니다.
        </h2>
        
        <div className="text-center mb-8">
          <Badge variant="default" className="text-sm px-4 py-2 mb-2">
            첫 500명에게는 '온기 베타 초대장'을 드립니다
          </Badge>
        </div>
        
        <Card className="p-8 bg-card border-card-border">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이름</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="홍길동" 
                        {...field} 
                        data-testid="input-name"
                        className="h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이메일</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="example@email.com" 
                        {...field} 
                        data-testid="input-email"
                        className="h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>전화번호</FormLabel>
                    <FormControl>
                      <Input 
                        type="tel"
                        placeholder="010-1234-5678" 
                        {...field} 
                        data-testid="input-phone"
                        className="h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                size="lg"
                className="w-full text-lg py-6 rounded-xl"
                disabled={form.formState.isSubmitting}
                data-testid="button-submit-form"
              >
                {form.formState.isSubmitting ? "제출 중..." : "온기 시작 소식 받기"}
              </Button>
              
              <p className="text-sm text-center text-muted-foreground">
                스팸 없이 오직 오픈 소식만 전해드려요 :)
              </p>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
}
