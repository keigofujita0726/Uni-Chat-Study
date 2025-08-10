import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex flex-col">
            <div className="text-sm text-gray-600">難関大生による学習コンサルティング</div>
            <div className="text-2xl font-bold text-gray-900">Uni Chat Study</div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-gray-700 hover:text-blue-600">
              コース紹介
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600">
              生徒さんの声
            </a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600">
              よくある質問
            </a>
            <a href="#news" className="text-gray-700 hover:text-blue-600">
              お知らせ
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="https://lin.ee/DMa2qbR" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="text-blue-600 border-blue-600 bg-transparent">
              資料請求する
            </Button>
            </Link>
            <Link href="https://lin.ee/DMa2qbR" target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-600 hover:bg-blue-700">今すぐ申し込む</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
