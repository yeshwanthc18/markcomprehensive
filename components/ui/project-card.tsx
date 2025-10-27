import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

interface ProjectCardProps {
  title: string
  location: string
  type: string
  image: string
}

export default function ProjectCard({ title, location, type, image }: ProjectCardProps) {
  return (
    <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-xs">
            {type}
          </Badge>
          <div className="flex items-center text-slate-500 text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
        </div>
        <CardTitle className="text-xl font-bold text-slate-900">{title}</CardTitle>
      </CardHeader>
    </Card>
  )
}
