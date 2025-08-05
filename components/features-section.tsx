import { Badge } from "@/components/ui/badge"

export function FeaturesSection() {
  const features = [
    {
      title: "難関大生による24時間\nチャットサポート",
      description:
        "東大・京大・早慶生があなた専属の先生として、勉強方法や学習計画の疑問もチャットでいつでも徹底サポート！\n難関大生とのWeb面談でモチベーションを上げます。",
      image: "/images/chat-support.png",
    },
    {
      title: "AIを使った次世代\n学習システム",
      description:
        "AIを使った音声つき問題解説のやり方や、効果的な使い方などを徹底的に指導します。\n最新のテクノロジーを活用した効率的な学習を実現します。",
      image: "/images/ai-learning.png",
    },
    {
      title: "目標に合わせた\nオーダーメイド学習",
      description:
        "生徒一人ひとりの個性とニーズに合わせた独自の指導法を提供します。基礎から難関校受験対策まで、どんな学習でも共に進められる環境を整えています。",
      image: "/images/mobile-learning.png",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4">選ばれる理由</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Uni Chat Studyが選ばれる3つの強み</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center whitespace-pre-line">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-full object-contain bg-white"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
