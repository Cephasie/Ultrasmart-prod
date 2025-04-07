"use client"

import React, {
  useEffect,
  useMemo,
  useState,
} from 'react';

import Image from 'next/image';

function ImageSlide({ src, index, isActive }: { src: string; index: number; isActive: boolean }) {
  return (
    <div
      className={`absolute inset-0 transition-opacity ease-in-out ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDuration: "1500ms" }}
    >
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={`House Image ${index + 1}`}
          fill
          className="object-cover"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </div>
  )
}

const MemoizedImageSlide = React.memo(ImageSlide)

export function HeroSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = useMemo(() => [
    "https://res.cloudinary.com/dtqrzl86y/image/upload/v1724334978/floorplan_dhmpcu.jpg",
    "https://res.cloudinary.com/dtqrzl86y/image/upload/v1719319579/UltraSmart%20Homes/Project%201/WhatsApp_Image_2024-05-25_at_18.37.14_9b63033b_djwken.jpg",
    "https://res.cloudinary.com/dtqrzl86y/image/upload/v1724334978/stairs_klg4so.jpg",
    "https://res.cloudinary.com/dtqrzl86y/image/upload/v1719319583/UltraSmart%20Homes/Project%201/WhatsApp_Image_2024-05-25_at_18.35.08_dcf13b6b_putwtb.jpg",
  ], [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="absolute inset-0 z-0">
      {images.map((src, index) => (
        <MemoizedImageSlide
          key={`${src}-${index}`}
          src={src}
          index={index}
          isActive={index === currentImageIndex}
        />
      ))}
    </div>
  )
}


// "use client"

// import {
//   memo,
//   useCallback,
//   useEffect,
//   useState,
// } from 'react';

// import Image from 'next/image';

// interface HeroSlideshowProps {
//   images: string[]
//   interval?: number
// }

// function HeroSlideshowComponent({ images, interval = 5000 }: HeroSlideshowProps) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)
//   const [isLoaded, setIsLoaded] = useState<boolean[]>(Array(images.length).fill(false))

//   const updateIndex = useCallback(() => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
//   }, [images.length])

//   useEffect(() => {
//     const timer = setInterval(updateIndex, interval)
//     return () => clearInterval(timer)
//   }, [updateIndex, interval])

//   const handleImageLoad = (index: number) => {
//     setIsLoaded((prev) => {
//       const newState = [...prev]
//       newState[index] = true
//       return newState
//     })
//   }

//   return (
//     <div className="absolute inset-0 z-0">
//       {images.map((src, index) => (
//         <div
//           key={src}
//           className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
//             index === currentImageIndex ? "opacity-100" : "opacity-0"
//           }`}
//           style={{ transitionDuration: "1.5s" }}
//         >
//           <div className="relative w-full h-full">
//             <Image
//               src={src || "/placeholder.svg"}
//               alt={`Luxury home ${index + 1}`}
//               fill
//               className={`object-cover transition-opacity duration-500 ${isLoaded[index] ? "opacity-100" : "opacity-0"}`}
//               priority={index === 0}
//               onLoad={() => handleImageLoad(index)}
//               sizes="100vw"
//             />
//             <div className="absolute inset-0 bg-black/40" />
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export const HeroSlideshow = memo(HeroSlideshowComponent)

