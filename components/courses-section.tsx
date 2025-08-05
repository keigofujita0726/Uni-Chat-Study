import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

export function CoursesSection() {
  const courses = [
    {
      title: "定期テスト・授業対策",
      description:
        "学校の授業内容に合わせた個別サポート。分からない問題もチャットですぐに質問でき、\n難関大生が丁寧に解説します。",
    },
    {
      title: "英検・資格試験対策",
      description:
        "英検合格や各種資格試験に向けた戦略的な学習プラン。過去問分析から効率的な勉強法まで、\n経験豊富な先輩がサポートします。",
    },
    {
      title: "大学受験対策",
      description:
        "志望校合格に向けた個別戦略を立案。東大・京大・早慶生による実践的なアドバイスで、\n確実な成績向上を目指します。",
    },
  ]

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4">コース紹介</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            授業・定期テスト対策から
            <br />
            英検・大学受験まで対応！
          </h2>
          <div className="max-w-4xl text-gray-600 leading-relaxed space-y-4">
            <p>
              難関大生があなた専属の先生として、個別の学習戦略を立てます。
              英検合格や定期テスト対策など、目標に合わせた学習プランを経験豊富な先輩が一緒に作成し、成績アップや志望校合格をサポート！
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {course.title}
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
