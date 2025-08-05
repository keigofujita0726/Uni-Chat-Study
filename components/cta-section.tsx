import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export function CTASection() {
  const ctaItems = [
    { title: "資料請求する", description: "詳しい資料をお送りします" },
    { title: "LINE友だち登録", description: "最新情報をお届けします" },
    { title: "コース紹介", description: "各コースの詳細をご覧ください" },
    { title: "キャンペーン", description: "お得な情報をチェック" },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 mb-4">初回登録で2週間無料トライアル実施中！</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-8">
            エキスパート東大生による
            <br />
            30分の無料勉強相談会
          </h2>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
            無料トライアルに申し込む
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {ctaItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
