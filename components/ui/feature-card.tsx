import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  image: string
}

export default function FeatureCard({ icon: Icon, title, description, image }: FeatureCardProps) {
  return (
    <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="pb-4">
        <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-50 to-blue-100  w-fit">
          <Icon className="h-8 w-8 text-[#01adff]" />
        </div>
        <CardTitle className="text-xl font-bold text-center text-slate-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-slate-600 leading-relaxed text-center">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
