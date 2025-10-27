import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface SpecialtyCardProps {
  icon: LucideIcon
  title: string
  description: string
  badge: string
  image: string
}

export default function SpecialtyCard({ icon: Icon, title, description, badge, image }: SpecialtyCardProps) {
  return (
    <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 ">
            <Icon className="h-6 w-6 text-[#01adff]" />
          </div>
          <Badge className="bg-[#01adff] hover:bg-[#01adff] text-white">{badge}</Badge>
        </div>
        <CardTitle className="text-xl font-bold text-slate-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-slate-600 leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
