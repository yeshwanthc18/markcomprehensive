import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Award } from "lucide-react"

interface LocationProjectsCardProps {
  projects: string[]
}

export default function LocationProjectsCard({ projects }: LocationProjectsCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-[#01adff]" />
          Notable Projects
        </CardTitle>
        <CardDescription>Recent achievements in your region</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {projects.map((project, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Award className="h-4 w-4 text-amber-500 flex-shrink-0" />
              <span className="text-slate-700">{project}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
