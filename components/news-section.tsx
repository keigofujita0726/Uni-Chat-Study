import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function NewsSection() {
  const news = [
    {
      date: "2025.08.03",
      category: "キャンペーン",
      title: "夏の入会キャンペーン実施中！",
      image: "/images/summer-campaign.png",
    },
  ]

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4">お知らせ</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">新着情報・キャンペーン</h2>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 line-clamp-2">{item.title}</h3>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">{item.date}</span>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {item.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
