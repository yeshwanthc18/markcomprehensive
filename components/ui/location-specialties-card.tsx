import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, CheckCircle } from "lucide-react"

interface LocationSpecialtiesCardProps {
  specialties: string[]
}

export default function LocationSpecialtiesCard({ specialties }: LocationSpecialtiesCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5 text-[#01adff]" />
          Our Specialties
        </CardTitle>
        <CardDescription>What makes our local team unique</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {specialties.map((specialty, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-slate-700">{specialty}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
