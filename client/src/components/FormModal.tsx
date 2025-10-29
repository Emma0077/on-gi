import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertNotificationSchema, type InsertNotification } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckCircle2 } from "lucide-react";

interface FormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: InsertNotification) => Promise<void>;
}

export default function FormModal({ open, onOpenChange, onSubmit }: FormModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<InsertNotification>({
    resolver: zodResolver(insertNotificationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const handleSubmit = async (data: InsertNotification) => {
    await onSubmit(data);
    setIsSubmitted(true);
    form.reset();
    setTimeout(() => {
      setIsSubmitted(false);
      onOpenChange(false);
    }, 2000);
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setIsSubmitted(false);
      form.reset();
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md" data-testid="dialog-signup-form">
        {isSubmitted ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <DialogTitle className="text-2xl mb-4">
              신청이 완료되었습니다!
            </DialogTitle>
            <p className="text-muted-foreground">
              온기의 오픈 소식을 가장 먼저 전해드리겠습니다.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">
                당신의 작은 다정이 세상을 바꿉니다
              </DialogTitle>
              <DialogDescription>
                <Badge variant="default" className="text-sm px-4 py-2 mt-2">
                  첫 500명에게는 '온기 베타 초대장'을 드립니다
                </Badge>
              </DialogDescription>
            </DialogHeader>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 mt-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이름 *</FormLabel>
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
                      <FormLabel>이메일 *</FormLabel>
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
                      <FormLabel>전화번호 (선택)</FormLabel>
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
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
