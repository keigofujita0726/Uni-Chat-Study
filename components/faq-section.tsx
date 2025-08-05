import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export function FAQSection() {
  const faqs = [
    {
      question: "入学の時期は決まっていますか？",
      answer:
        "入学時期に特別な制限はございません。いつでもご入学いただけます。ただし、学習効果を最大化するため、学期の始まりや定期テスト後のタイミングでの入学をおすすめしています。",
    },
    {
      question: "無料体験授業はありますか？",
      answer: "現在期間限定で2週間の無料体験期間を設けております。",
    },
    {
      question: "授業料の支払い方法は？",
      answer: "授業料のお支払いは、銀行振込、口座振替、クレジットカード決済に対応しております。",
    },
    {
      question: "兄弟で入学する場合、割引はありますか？",
      answer:
        "はい、兄弟割引制度をご用意しております。2人目以降のお子様の授業料を20%割引いたします。詳細はお問い合わせください。",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4">よくある質問</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">入会・授業について</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-medium text-gray-900">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
