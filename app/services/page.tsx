import {
  ArrowRight,
  Brush,
  Cog,
  Compass,
  Home,
  Wrench,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { PageHeader } from '@/components/layout/page-header';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';

export default function ServicesPage() {
  const services = [
    {
      icon: <Home className="mr-1 h-4 w-4" />,
      title: "Custom Home Design & Building",
      description: "Your Dream Home, Expertly Crafted",
      longDescription:
        "Our custom home design and building service transforms your vision into reality. We work closely with you from initial concept to final construction, ensuring every detail reflects your unique style and needs.",
      features: [
        "Personalized architectural design tailored to your lifestyle",
        "Premium materials and expert craftsmanship",
        "Energy-efficient and sustainable building practices",
        "Comprehensive project management from start to finish",
      ],
      image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1739289891/UltraSmart%20Homes/c837a6_9045f280be72474491617fe62485c878_mv2_qvyh8h.webp",
      alt: "Custom home design",
      cta: "Start Your Custom Home Journey",
      background: "white",
      reverse: false,
    },
    {
      icon: <Wrench className="mr-1 h-4 w-4" />,
      title: "Renovations & Remodeling",
      description: "Transform Your Existing Space",
      longDescription:
        "Our renovation and remodeling services breathe new life into your existing home. Whether you're looking to update a single room or completely transform your space, our team delivers exceptional results with minimal disruption.",
      features: [
        "Kitchen and bathroom renovations",
        "Home additions and extensions",
        "Basement and attic conversions",
        "Whole-home modernization and updates",
      ],
      image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1719319586/UltraSmart%20Homes/Project%201/WhatsApp_Image_2024-05-25_at_18.37.15_86d0442a_zoggku.jpg",
      alt: "Home renovation",
      cta: "Explore Renovation Options",
      background: "light",
      reverse: true,
    },
    {
      icon: <Brush className="mr-1 h-4 w-4" />,
      title: "Interior Design",
      description: "Elevate Your Living Experience",
      longDescription:
        "Our interior design services create harmonious, functional, and beautiful living spaces that reflect your personality and enhance your daily life. From color schemes to furniture selection, we handle every aspect of interior aesthetics.",
      features: [
        "Customized design concepts tailored to your style",
        "Material, fixture, and furniture selection",
        "Space planning and optimization",
        "Lighting design and smart home integration",
      ],
      image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1719319579/UltraSmart%20Homes/Project%201/WhatsApp_Image_2024-05-25_at_18.37.14_9b63033b_djwken.jpg",
      alt: "Interior design",
      cta: "Transform Your Interior",
      background: "white",
      reverse: false,
    },
    {
      icon: (
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
          className="mr-1 h-4 w-4"
        >
          <path d="M2 22v-5l5-5 5 5-5 5z" />
          <path d="M9.5 14.5 16 8" />
          <path d="m17 2 5 5-5 5-5-5z" />
        </svg>
      ),
      title: "Sustainable Building",
      description: "Eco-Friendly Construction",
      longDescription:
        "Our sustainable building practices create homes that are environmentally responsible, energy-efficient, and healthy for occupants. We incorporate green technologies and materials to reduce environmental impact while enhancing comfort.",
      features: [
        "Energy-efficient design and construction",
        "Solar panel integration and renewable energy solutions",
        "Water conservation systems",
        "Eco-friendly and non-toxic building materials",
      ],
      image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1719319582/UltraSmart%20Homes/Project%201/WhatsApp_Image_2024-05-25_at_18.35.07_ccd5810e_krtmg6.jpg",
      alt: "Sustainable building",
      cta: "Build Green With Us",
      background: "light",
      reverse: true,
    },
    {
      icon: <Cog className="mr-1 h-4 w-4" />,
      title: "Project Management",
      description: "Seamless Construction Process",
      longDescription:
        "Our comprehensive project management ensures your construction project runs smoothly from start to finish. We handle permits, scheduling, budgeting, and coordination with all subcontractors, allowing you to enjoy a stress-free building experience.",
      features: [
        "Detailed project planning and scheduling",
        "Budget management and cost control",
        "Permit acquisition and regulatory compliance",
        "Quality control and regular progress updates",
      ],
      image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1724334978/floorplan_dhmpcu.jpg",
      alt: "Project management",
      cta: "Learn About Our Process",
      background: "white",
      reverse: false,
    },
    {
      icon: <Compass className="mr-1 h-4 w-4" />,
      title: "Architectural Design",
      description: "Innovative Design Solutions",
      longDescription:
        "Our architectural design services blend creativity with functionality to create spaces that are both beautiful and practical. Our team of experienced architects works closely with you to develop designs that reflect your vision and lifestyle needs.",
      features: [
        "Custom architectural plans and 3D renderings",
        "Site analysis and optimal orientation planning",
        "Innovative space utilization strategies",
        "Compliance with building codes and regulations",
      ],
      image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1730216947/UltraSmart%20Homes/Engineers_kwnqgl.png",
      alt: "Architectural design",
      cta: "Start Your Design Journey",
      background: "light",
      reverse: true,
    },
  ]

  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive construction and real estate solutions tailored to your unique needs."
      />

      {services.map((service, index) => (
        <Section key={index} background={service.background as "white" | "light"}>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className={`order-2 ${service.reverse ? "lg:order-2" : "lg:order-1"}`}>
              <div className="inline-flex items-center rounded-lg bg-estate-secondary/20 px-3 py-1 text-sm text-estate-secondary mb-4">
                {service.icon}
                <span>{service.title}</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-estate-primary mb-4">
                {service.description}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">{service.longDescription}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
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
                      className="h-5 w-5 text-estate-secondary mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="gap-1 bg-estate-primary hover:bg-estate-primary/90 transition-all duration-300 hover:gap-2">
                  {service.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className={`order-1 ${service.reverse ? "lg:order-1" : "lg:order-2"} flex justify-center`}>
              <div className="relative w-full max-w-md h-[400px] rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02] duration-500">
                <Image src={service.image || "/placeholder.svg"} alt={service.alt} fill className="object-cover" />
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section background="primary">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="max-w-[700px] mx-auto text-white/80 md:text-xl mb-8">
            Contact us today to schedule a consultation and discover how UltraSmart Constructions can bring your vision to life.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="gap-1 bg-estate-secondary text-estate-dark hover:bg-estate-secondary/90 transition-all duration-300 hover:gap-2"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  )
}

