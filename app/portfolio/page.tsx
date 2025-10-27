import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Building2, MapPin, Calendar, Users, ExternalLink } from 'lucide-react';

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: 'Manhattan Sky Tower',
      location: 'New York, USA',
      year: '2023',
      type: 'Commercial High-Rise',
      description: 'A revolutionary 68-story mixed-use tower featuring advanced curtain wall systems and energy-efficient glazing.',
      image: 'https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        floors: '68',
        area: '2.5M sq ft',
        completion: '18 months'
      },
      features: ['Smart Glass Technology', 'Seismic Resistant Design', 'LEED Platinum Certified']
    },
    {
      id: 2,
      title: 'Berlin Innovation Hub',
      location: 'Berlin, Germany',
      year: '2023',
      type: 'Office Complex',
      description: 'Sustainable office complex with dynamic façade systems that respond to environmental conditions.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        floors: '25',
        area: '1.2M sq ft',
        completion: '14 months'
      },
      features: ['Dynamic Shading', 'Energy Harvesting', 'Modular Design']
    },
    {
      id: 3,
      title: 'Tokyo Cultural Center',
      location: 'Tokyo, Japan',
      year: '2022',
      type: 'Cultural Building',
      description: 'Award-winning cultural center combining traditional aesthetics with modern aluminum façade technology.',
      image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        floors: '12',
        area: '850K sq ft',
        completion: '20 months'
      },
      features: ['Cultural Integration', 'Artistic Panels', 'Earthquake Resistant']
    },
    {
      id: 4,
      title: 'London Financial District',
      location: 'London, UK',
      year: '2022',
      type: 'Mixed-Use Development',
      description: 'Prestigious financial district development with cutting-edge façade systems and premium finishes.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        floors: '45',
        area: '3.1M sq ft',
        completion: '24 months'
      },
      features: ['Premium Finishes', 'Smart Building Systems', 'Heritage Integration']
    },
    {
      id: 5,
      title: 'Milan Fashion Center',
      location: 'Milan, Italy',
      year: '2021',
      type: 'Retail & Office',
      description: 'Elegant retail and office complex showcasing Italian design excellence with modern functionality.',
      image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        floors: '18',
        area: '650K sq ft',
        completion: '16 months'
      },
      features: ['Luxury Retail Integration', 'Fashion-Forward Design', 'Sustainable Materials']
    },
    {
      id: 6,
      title: 'Toronto Waterfront',
      location: 'Toronto, Canada',
      year: '2021',
      type: 'Residential Complex',
      description: 'Sustainable residential development with innovative façade solutions for extreme weather conditions.',
      image: 'https://images.pexels.com/photos/1578662/pexels-photo-1578662.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        floors: '35',
        area: '1.8M sq ft',
        completion: '22 months'
      },
      features: ['Weather Resistant', 'Thermal Performance', 'Residential Focus']
    }
  ];

  const categories = [
    { name: 'All Projects', count: projects.length },
    { name: 'Commercial', count: 4 },
    { name: 'Residential', count: 1 },
    { name: 'Cultural', count: 1 },
    { name: 'Mixed-Use', count: 2 }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-[#01adff] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-[#01adff] hover:bg-[#01adff]">
              Our Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming Skylines
              <span className="block text-blue-300">Worldwide</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Explore our portfolio of award-winning projects that showcase innovation, quality, and architectural excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#01adff] mb-2">500+</div>
              <div className="text-black">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#01adff] mb-2">50M+</div>
              <div className="text-black">Square Feet Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#01adff] mb-2">25+</div>
              <div className="text-black">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#01adff] mb-2">6</div>
              <div className="text-black">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Badge key={index} variant="outline" className="cursor-pointer hover:bg-blue-50 hover:border-blue-300">
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{project.type}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-black mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="text-center">
                      <Building2 className="h-4 w-4 mx-auto mb-1 text-[#01adff]" />
                      <div className="font-semibold">{project.stats.floors}</div>
                      <div className="text-gray-500">Floors</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-4 w-4 mx-auto mb-1 text-[#01adff]" />
                      <div className="font-semibold">{project.stats.area}</div>
                      <div className="text-gray-500">Area</div>
                    </div>
                    <div className="text-center">
                      <Calendar className="h-4 w-4 mx-auto mb-1 text-[#01adff]" />
                      <div className="font-semibold">{project.stats.completion}</div>
                      <div className="text-gray-500">Timeline</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-black">Key Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#01adff] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Masterpiece?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our portfolio of successful projects. Let's discuss how we can bring your architectural vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#01adff] hover:bg-blue-50">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#01adff]">
              <Link href="/services">Our Services <ExternalLink className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}