import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "Building Smart with Skylights & Automated Access Systems",
    date: "April 9, 2025",
    excerpt: "Discover how smart skylight systems are revolutionizing natural lighting and building automation.",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Innovation",
  },
  {
    title: "The Art of Cladding: Materials, Styles, and Performance",
    date: "April 9, 2025",
    excerpt: "Exploring the latest trends in facade cladding materials and their impact on architectural design.",
    image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Design",
  },
  {
    title: "Why Fire-Rated Systems Are Essential in High-Rise Architecture",
    date: "April 9, 2025",
    excerpt: "Understanding the critical importance of fire safety in modern high-rise building design.",
    image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Safety",
  },
  {
    title: "The Future of Facades: Trends Shaping Modern Architecture",
    date: "May 26, 2024",
    excerpt: "A comprehensive look at emerging trends and technologies in facade design and construction.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Trends",
  },
]

export default function BlogSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 px-6 py-2">
              Industry Insights
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Discover Trends, News & Expert Perspective
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Dive into the latest industry insights, project highlights, and expert takes on architectural innovation
              and façade technology.
            </p>
          </div>
        </ScrollTriggerComponent>

        <ScrollTriggerComponent animation="scaleIn" stagger={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-100 text-blue-800 text-xs">{post.category}</Badge>
                    <div className="flex items-center text-xs text-slate-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-[#01adff] transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Button variant="ghost" className="p-0 h-auto text-[#01adff] hover:text-[#01adff] font-semibold">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollTriggerComponent>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#01adff] hover:bg-[#01adff] text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/blog">
              Read More Articles <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
