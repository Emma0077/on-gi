import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "기부는 얼마부터 할 수 있나요?",
    answer: "한 끼 단위(예: 5,000원)부터 시작할 수 있습니다.",
  },
  {
    question: "내가 기부한 것이 어떻게 쓰이는지 알 수 있나요?",
    answer: "모든 기부는 제휴된 식사권으로 전달되어, 청년들이 실제 식사에 사용할 수 있습니다.",
  },
  {
    question: "수혜자가 누구인지 확인할 수 있나요?",
    answer: "개별 신상은 공개되지 않으며, 익명 또는 간단한 스토리 형태로만 공유됩니다.",
  },
  {
    question: "기부자는 서로 연결되나요?",
    answer: "직접 연결되지는 않지만, \"전체 발자국\" 현황을 통해 다른 기부자들과 함께 변화를 만든다는 소속감을 느낄 수 있습니다.",
  },
  {
    question: "랭킹이나 순위는 있나요?",
    answer: "개별 순위는 공개하지 않고, 전체가 모은 총량과 내가 기여한 몫을 확인할 수 있습니다.",
  },
  {
    question: "단체별 기부 현황도 볼 수 있나요?",
    answer: "선택적으로 소속(학교, 회사, 지역 등)을 입력하면 단체별 누적 현황을 확인할 수 있습니다. (단, 순위 경쟁 대신 기여도 총합 중심)",
  },
  {
    question: "기부금 영수증 발급이 가능한가요?",
    answer: "네, 제휴된 비영리 단체를 통해 기부금 영수증을 발급받을 수 있습니다.",
  },
  {
    question: "정기적으로 기부할 수도 있나요?",
    answer: "네, 매월 '한 끼 정기 기부'를 설정할 수 있습니다.",
  },
  {
    question: "기부 메시지는 꼭 작성해야 하나요?",
    answer: "선택 사항입니다. 다만 간단한 한 줄 응원이 큰 힘이 됩니다.",
  },
  {
    question: "해외에서도 참여할 수 있나요?",
    answer: "초기에는 국내 중심으로 운영되며, 추후 확장 예정입니다.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          자주 묻는 질문
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          온기에 대해 궁금한 점을 확인해보세요
        </p>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-card-border rounded-xl px-6 hover-elevate"
              data-testid={`accordion-faq-${index + 1}`}
            >
              <AccordionTrigger className="text-left font-semibold text-card-foreground hover:no-underline py-6">
                Q. {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                A. {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
