import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  title: string
  project: string
  image: string
}

export default function TestimonialCard({ quote, author, title, project, image }: TestimonialCardProps) {
  return (
    <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardContent className="p-8">
        <div className="flex mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <blockquote className="text-slate-600 mb-8 italic leading-relaxed text-lg">"{quote}"</blockquote>
        <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
          <img src={image || "/placeholder.svg"} alt={author} className="w-12 h-12  object-cover" />
          <div>
            <div className="font-semibold text-slate-900">{author}</div>
            <div className="text-sm text-slate-500">{title}</div>
            <div className="text-sm text-[#01adff] font-medium">{project}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
