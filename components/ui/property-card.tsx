"use client"

import { useState } from 'react';

import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
  title: string
  location: string
  price: number
  beds: number
  baths: number
  sqft: number
  feature: string
  type: string
  imageUrl: string
}

export function PropertyCard({
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  feature,
  type,
  imageUrl,
}: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="overflow-hidden">
          <Image
            src={imageUrl || "https://res.cloudinary.com/dtqrzl86y/image/upload/v1719319583/UltraSmart%20Homes/Project%201/WhatsApp_Image_2024-05-25_at_18.35.08_dcf13b6b_putwtb.jpg"}
            width={400}
            height={300}
            alt={title}
            className={cn("object-cover w-full h-48 transition-transform duration-700", isHovered && "scale-110")}
          />
        </div>
        <div className="absolute top-2 right-2 bg-estate-secondary text-estate-dark px-2 py-1 text-xs font-medium rounded">
          {/* {type} */}
        </div>
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-1 text-estate-primary">{title}</CardTitle>
        <CardDescription className="flex items-center">
          {/* <MapPin className="mr-1 h-3 w-3" /> */}
          {/* {location} */}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        {/* <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center">
            <span className="font-medium">{beds} Beds</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">{baths} Baths</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">{sqft.toLocaleString()} sqft</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">{feature}</span>
          </div>
        </div> */}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {/* <div className="flex w-full items-center justify-between">
          <div className="text-lg font-bold text-estate-accent">${price.toLocaleString()}</div>
          <Button
            size="sm"
            variant="outline"
            className="border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-white transition-colors"
          >
            View Details
          </Button>
        </div> */}
      </CardFooter>
    </Card>
  )
}
