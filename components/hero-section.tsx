import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-blue-100 text-blue-800 mb-6">今だけ入学キャンペーン実施中！</Badge>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              難関大生がキミ専属の先生に！
              <br />
              君だけの学習戦略を立てる個別サポート！
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Uni Chat
              Studyでは、東大・京大・早慶生があなた専属の先生として、24時間チャットで学習戦略をサポートします。AIを活用した次世代学習システムで、授業・定期テスト対策から英検・大学受験まで幅広く対応し、スマホ・タブレット・PCでいつでもどこでも学習を進められます。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://lin.ee/DMa2qbR" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                無料体験に申し込む
              </Button>
              </Link>
              <Link href="https://lin.ee/DMa2qbR" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-blue-600 border-blue-600 bg-transparent">
                資料請求する
              </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/students-studying.png"
              alt="勉強する生徒たち"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
