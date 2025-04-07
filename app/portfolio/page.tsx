import { Suspense } from 'react';

import Link from 'next/link';

import { PageHeader } from '@/components/layout/page-header';
import { Button } from '@/components/ui/button';
import { PropertyCard } from '@/components/ui/property-card';
import { Section } from '@/components/ui/section';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function PortfolioPage() {
  const properties = Array.from({ length: 9 }).map((_, i) => ({
    title: i % 3 === 0 ? "Modern Aso Villa" : i % 3 === 1 ? "Urban Wuse Apartment" : "Karu Home",
    location: i % 3 === 0 ? "Lake District, CA" : i % 3 === 1 ? "Downtown Metro" : "Suburban Heights",
    price: (i % 5) * 250000 + 500000,
    beds: (i % 3) + 3,
    baths: (i % 2) + 2,
    sqft: ((i % 4) + 1) * 1000,
    feature: i % 3 === 0 ? "Pool" : i % 3 === 1 ? "Balcony" : "Garden",
    type: i % 3 === 0 ? "New Build" : i % 3 === 1 ? "For Sale" : "Custom Design",
    imageUrl: `https://res.cloudinary.com/dtqrzl86y/image/upload/v1719319576/UltraSmart%20Homes/Project%201/WhatsApp_Image_2024-05-25_at_18.35.08_35cfa540_mhyycz.jpg`,
  }))

  return (
    <>
      <PageHeader
        title="See Our Dream Homes"
        description="Browse our collection of premium properties and custom-built homes."
        className="bg-estate-primary"
      >
        {/* <div className="w-full max-w-3xl space-y-2 mt-8">
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
        </div> */}
      </PageHeader>

      <Section>
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-estate-primary">Completed Projects</h2>
            <p className="text-muted-foreground">Showing 9 of 24 properties</p>
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

        <Suspense fallback={<div>Loading properties...</div>}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {properties.map((property, i) => (
              <PropertyCard key={i} {...property} />
            ))}
          </div>
        </Suspense>

        <div className="flex items-center justify-center space-x-2 py-8 mt-8">
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
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 bg-estate-primary text-white hover:bg-estate-primary/90"
          >
            1
          </Button>
          <Link href="/portfolio/page-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-white"
            >
              2
            </Button>
          </Link>
          <Link href="/portfolio/page-3">
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-white"
            >
              3
            </Button>
          </Link>
          <Link href="/portfolio/page-2">
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
      </Section>
    </>
  )
}

