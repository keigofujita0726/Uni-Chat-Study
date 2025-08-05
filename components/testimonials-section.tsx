"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      category: "高校受験対策",
      quote: "子どもの成長を一緒に喜んでくれる先生方に感謝",
      content:
        "定期的な面談で、子どもの学習状況や課題を詳しく説明していただき、家庭でのサポート方法まで親身にアドバイスいただきました。先生方が子どもの小さな進歩も一緒に喜んでくださり、親子ともども強く感じています。",
      student: "中学1年生 鈴木さん",
      parent: "",
    },
    {
      category: "英語4技能",
      quote: "やるべきことが明確になり、3ヶ月で英検スコアが2倍に",
      content:
        "僕のペースに合わせた学習計画も立ててもらえたことで、最適な学習ができました。何をいつまでに勉強すればいいのかやどの参考書を使えばいいのかなどを丁寧に教えてもらえました。コーチのおかげで３ヶ月で英検２級のスコアが4割から8割まで上がりました！",
      student: "中学３年生 中藤さん",
      parent: "",
    },
    {
      category: "大学受験コース",
      quote: "いつでも何度でも質問できる環境が心強かった",
      content:
        "英語が苦手でしたがコーチが勉強の仕方・暗記の仕方から根気強く教えてくださり、少しずつ理解が深まってきました。質問したい時にいつでも質問できて、分からないところを解消できたことが成績アップに繋がったと思います。",
      student: "高校３年生 木村さん",
      parent: "",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4">生徒・保護者様の声</Badge>
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">生徒の成長に寄り添い、未来へ導く</h2>
              <p className="text-gray-600 max-w-2xl">
                Uni Chat Studyで学習された生徒さんと保護者様から、たくさんの声をいただいています。
                その中から一部をご紹介させていただきます。
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`transition-all duration-300 ${index === currentIndex ? "ring-2 ring-blue-500" : ""}`}
            >
              <CardContent className="p-6">
                <Badge className="bg-blue-100 text-blue-800 mb-4">{testimonial.category}</Badge>
                <blockquote className="text-lg font-semibold text-gray-900 mb-4">"{testimonial.quote}"</blockquote>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{testimonial.content}</p>
                <div className="text-sm text-gray-500">{testimonial.student}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
