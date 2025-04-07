import Link from "next/link"
import Image from "next/image"
import { Building, Filter, MapPin, Search, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PropertiesPage2() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Building className="h-6 w-6 text-estate-primary" />
            <span className="text-xl font-bold text-estate-primary">BuildHaven Homes</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-estate-primary">
              Home
            </Link>
            <Link href="/properties" className="text-sm font-medium transition-colors hover:text-estate-primary">
              Properties
            </Link>
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-estate-primary">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-estate-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-estate-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="hidden md:flex">
              Sign In
            </Button>
            <Button className="bg-estate-primary hover:bg-estate-primary/90">Get a Quote</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-estate-light">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-estate-primary">
                  Find Your Dream Home
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Browse our collection of premium properties and custom-built homes.
                </p>
              </div>
              <div className="w-full max-w-3xl space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search by location, property type, or features..."
                    className="w-full appearance-none bg-background pl-8 shadow-sm"
                  />
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
                  <Select>
                    <SelectTrigger id="property-type">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="land">Land</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger id="bedrooms">
                      <SelectValue placeholder="Bedrooms" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                      <SelectItem value="5">5+</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger id="bathrooms">
                      <SelectValue placeholder="Bathrooms" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full bg-estate-primary hover:bg-estate-primary/90">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-estate-primary">Available Properties</h2>
                <p className="text-muted-foreground">Showing 9 of 24 properties (Page 2)</p>
              </div>
              <div className="flex items-center gap-2">
                <Select defaultValue="newest">
                  <SelectTrigger id="sort" className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="size-asc">Size: Small to Large</SelectItem>
                    <SelectItem value="size-desc">Size: Large to Small</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=${i + 10}`}
                      width={400}
                      height={300}
                      alt={`Property ${i + 10}`}
                      className="object-cover w-full h-48"
                    />
                    <div className="absolute top-2 right-2 bg-estate-secondary text-estate-dark px-2 py-1 text-xs font-medium rounded">
                      {i % 3 === 0 ? "Luxury" : i % 3 === 1 ? "Waterfront" : "Mountain View"}
                    </div>
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1 text-estate-primary">
                      {i % 3 === 0 ? "Executive Estate" : i % 3 === 1 ? "Waterfront Retreat" : "Mountain Chalet"}
                      {` ${i + 10}`}
                    </CardTitle>
                    <CardDescription className="flex items-center">
                      <MapPin className="mr-1 h-3 w-3" />
                      {i % 3 === 0 ? "Hillcrest, CA" : i % 3 === 1 ? "Lakeside, WA" : "Mountain Ridge, CO"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <span className="font-medium">{(i % 3) + 4} Beds</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">{(i % 2) + 3} Baths</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">{((i % 4) + 2) * 1000} sqft</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">
                          {i % 3 === 0 ? "Theater" : i % 3 === 1 ? "Dock" : "Hot Tub"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <div className="flex w-full items-center justify-between">
                      <div className="text-lg font-bold text-estate-accent">
                        ${((i % 5) * 300 + 800).toLocaleString()},000
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-white"
                      >
                        View Details
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex items-center justify-center space-x-2 py-8">
              <Link href="/properties">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  <span className="sr-only">Previous</span>
                </Button>
              </Link>
              <Link href="/properties">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-white"
                >
                  1
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 bg-estate-primary text-white hover:bg-estate-primary/90"
              >
                2
              </Button>
              <Link href="/properties/page-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-white"
                >
                  3
                </Button>
              </Link>
              <Link href="/properties/page-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  <span className="sr-only">Next</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-estate-dark text-white">
        <div className="container flex flex-col gap-6 py-12 md:flex-row md:gap-8">
          <div className="flex flex-col gap-3 md:w-1/3">
            <div className="flex items-center gap-2">
              <Building className="h-6 w-6 text-estate-secondary" />
              <span className="text-xl font-bold text-estate-secondary">BuildHaven Homes</span>
            </div>
            <p className="text-sm text-white/70">Building quality homes and lasting relationships since 2005.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-white/70 hover:text-estate-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-estate-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-estate-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-estate-secondary">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-white/70 hover:text-estate-secondary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-white/70 hover:text-estate-secondary">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-white/70 hover:text-estate-secondary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-estate-secondary">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-estate-secondary">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services/custom-homes" className="text-white/70 hover:text-estate-secondary">
                    Custom Homes
                  </Link>
                </li>
                <li>
                  <Link href="/services/renovations" className="text-white/70 hover:text-estate-secondary">
                    Renovations
                  </Link>
                </li>
                <li>
                  <Link href="/services/interior-design" className="text-white/70 hover:text-estate-secondary">
                    Interior Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/project-management" className="text-white/70 hover:text-estate-secondary">
                    Project Management
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-estate-secondary">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-estate-secondary" />
                  <span className="text-white/70">
                    123 Construction Ave
                    <br />
                    Building City, ST 12345
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-estate-secondary" />
                  <span className="text-white/70">(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-estate-secondary" />
                  <span className="text-white/70">info@buildhaven.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-white/70 md:text-left">
              © {new Date().getFullYear()} BuildHaven Homes. All rights reserved.
            </p>
            <p className="text-center text-sm text-white/70 md:text-left">
              <Link href="/privacy" className="underline underline-offset-4 hover:text-estate-secondary">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="/terms" className="underline underline-offset-4 hover:text-estate-secondary">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

