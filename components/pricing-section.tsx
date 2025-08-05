import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "ベーシックプラン",
      price: "月額7,700円（税込）",
      description: "まずは気軽に始めたい方へ！\n基本的な学習サポートを網羅",
      features: ["24時間チャット対応", "定期テスト対策サポート", "学習戦略相談", "月1回の定期面談"],
    },
    {
      name: "スタンダードプラン",
      price: "月額9,900円（税込）",
      description: "より手厚いサポートで確実にステップアップ！\n難関大受験も見据えた徹底指導",
      features: ["スタンダードプランの全機能", "専門コース（英検等）選択可", "月2回の定期面談"],
      popular: true,
    },
    {
      name: "アドバンスプラン",
      price: "月額14,300円（税込）",
      description: "最高レベルのサポートで志望校合格を確実に！\n保護者様との連携も万全",
      features: ["スタンダードプランの全機能", "月4回の定期面談", "保護者相談対応"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4">料金プラン</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">選べる料金プラン（月額・税込）</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative flex flex-col ${plan.popular ? "ring-2 ring-blue-500" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                  人気プラン
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="text-xl font-bold text-blue-600 my-4">{plan.price}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">このプランを選ぶ</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">今すぐUni Chat Studyを始めよう！</p>
          <p className="text-sm text-gray-500">
            右のQRコードを読み取って、カンタン申し込み！
            <br />
            ※本サービスは問題解説は行うが、学習計画・戦略立案を行います
          </p>
        </div>
      </div>
    </section>
  )
}
