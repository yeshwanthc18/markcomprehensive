import { IndustriesGrid } from "./industries-grid"

export default function IndustriesPage({
  searchParams,
}: {
  searchParams?: { region?: string }
}) {
  const initialRegionRaw = (searchParams?.region || "All") as string
  const allowed = ["All", "Oman", "India", "Iraq", "KSA", "UAE"] as const
  const initialRegion = (
    allowed.includes(initialRegionRaw as any) ? (initialRegionRaw as (typeof allowed)[number]) : "All"
  ) as any

  return (
    <main>
      <IndustriesGrid initialRegion={initialRegion} />
    </main>
  )
}
