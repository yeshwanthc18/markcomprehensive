import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import type { LocationData } from "@/lib/geoplugin"

interface LocationInfoCardProps {
  locationData: LocationData
}

export default function LocationInfoCard({ locationData }: LocationInfoCardProps) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex items-center space-x-3">
          <MapPin className="h-5 w-5 text-[#01adff] flex-shrink-0" />
          <div>
            <p className="font-medium text-slate-900">Address</p>
            <p className="text-slate-600 text-sm">{locationData.address}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-[#01adff] flex-shrink-0" />
          <div>
            <p className="font-medium text-slate-900">Phone</p>
            <p className="text-slate-600 text-sm">{locationData.phone}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5 text-[#01adff] flex-shrink-0" />
          <div>
            <p className="font-medium text-slate-900">Email</p>
            <p className="text-slate-600 text-sm">{locationData.email}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Clock className="h-5 w-5 text-[#01adff] flex-shrink-0" />
          <div>
            <p className="font-medium text-slate-900">Timezone</p>
            <p className="text-slate-600 text-sm">{locationData.timezone}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Languages</h4>
          <div className="flex flex-wrap gap-2">
            {locationData.languages.map((lang, index) => (
              <Badge key={index} variant="outline" className="text-sm">
                {lang}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Certifications</h4>
          <div className="flex flex-wrap gap-2">
            {locationData.certifications.map((cert, index) => (
              <Badge key={index} className="bg-green-100 text-green-800 text-sm">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
