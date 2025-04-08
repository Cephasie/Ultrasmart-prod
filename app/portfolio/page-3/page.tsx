import { Suspense } from 'react';

import Link from 'next/link';

import { PageHeader } from '@/components/layout/page-header';
import { Button } from '@/components/ui/button';
import { PropertyCard } from '@/components/ui/property-card';
import { Section } from '@/components/ui/section';

export default function PortfolioPage3() {
  const properties = Array.from({ length: 9 }).map((_, i) => ({
    title: i % 3 === 0 ? "Mbappe Home" : i % 3 === 1 ? "Home Three" : "Home Estate",
    location: i % 3 === 0 ? "Oceanside, FL" : i % 3 === 1 ? "City Center" : "Rural Valley",
    price: (i % 5) * 350000 + 900000,
    beds: (i % 3) + 4,
    baths: (i % 2) + 3,
    sqft: ((i % 4) + 3) * 1000,
    feature: i % 3 === 0 ? "Beach Access" : i % 3 === 1 ? "Rooftop Terrace" : "Acreage",
    type: i % 3 === 0 ? "Beachfront" : i % 3 === 1 ? "Penthouse" : "Estate",
    imageUrl: `https://res.cloudinary.com/dtqrzl86y/image/upload/v1719319954/UltraSmart%20Homes/Project%203/WhatsApp_Image_2024-05-25_at_19.19.38_a9e41347_dqwdhc.jpg`,
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
            <h2 className="text-2xl font-bold tracking-tight text-estate-primary">Available Properties</h2>
            <p className="text-muted-foreground">Showing 9 of 24 properties (Page 3)</p>
          </div>
          {/* <div className="flex items-center gap-2">
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
          </div> */}
        </div>

        <Suspense fallback={<div>Loading properties...</div>}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {properties.map((property, i) => (
              <PropertyCard key={i} {...property} />
            ))}
          </div>
        </Suspense>

        <div className="flex items-center justify-center space-x-2 py-8 mt-8">
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
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span className="sr-only">Previous</span>
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-white"
            >
              1
            </Button>
          </Link>
          <Link href="/portfolio/page-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-white"
            >
              2
            </Button>
          </Link>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 bg-estate-primary text-white hover:bg-estate-primary/90"
          >
            3
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-white"
            disabled
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
        </div>
      </Section>
    </>
  )
}

