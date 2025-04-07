import {
  ArrowRight,
  Award,
  CheckCircle,
  Home,
  Star,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { HeroSlideshow } from '@/components/hero-slideshow';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { FeatureCard } from '@/components/ui/feature-card';
import { PropertyCard } from '@/components/ui/property-card';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

export default function HomePage() {
  const heroImages = [
    "https://res.cloudinary.com/dtqrzl86y/image/upload/v1724334978/floorplan_dhmpcu.jpg",
    "https://res.cloudinary.com/dtqrzl86y/image/upload/v1719319579/UltraSmart%20Homes/Project%201/WhatsApp_Image_2024-05-25_at_18.37.14_9b63033b_djwken.jpg",
    "https://res.cloudinary.com/dtqrzl86y/image/upload/v1724334978/stairs_klg4so.jpg",
    "https://res.cloudinary.com/dtqrzl86y/image/upload/v1719319583/UltraSmart%20Homes/Project%201/WhatsApp_Image_2024-05-25_at_18.35.08_dcf13b6b_putwtb.jpg",
  ]

  const valuePropositions = [
    {
      icon: <Star className="h-10 w-10 text-estate-secondary" />,
      title: "Premium Quality",
      description: "We use only the finest materials and craftsmanship in every project we undertake.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-estate-secondary" />,
      title: "Trusted Experience",
      description: "With over solid industry experience and expert engineers, we bring expertise and reliability to every home.",
    },
    {
      icon: <Users className="h-10 w-10 text-estate-secondary" />,
      title: "Client-Centered",
      description: "Your vision drives our work. We collaborate closely to create your perfect space.",
    },
    {
      icon: <Award className="h-10 w-10 text-estate-secondary" />,
      title: "Award-Winning",
      description: "Our designs and construction have been recognized for excellence and innovation.",
    },
  ]

  const featuredProperties = [
    {
      title: "Modern Lakeside Villa",
      location: "Lake District, CA",
      price: 750000,
      beds: 3,
      baths: 2,
      sqft: 1000,
      feature: "Pool",
      type: "New Build",
      imageUrl: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1719319583/UltraSmart%20Homes/Project%201/WhatsApp_Image_2024-05-25_at_18.35.08_dcf13b6b_putwtb.jpg",
    },
    {
      title: "Urban Luxury Apartment",
      location: "Downtown Metro",
      price: 500000,
      beds: 4,
      baths: 3,
      sqft: 2000,
      feature: "Balcony",
      type: "For Sale",
      imageUrl: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1719319965/UltraSmart%20Homes/Project%203/WhatsApp_Image_2024-05-25_at_19.25.04_e0a99112_qu0bfg.jpg",
    },
    {
      title: "Custom Family Home",
      location: "Suburban Heights",
      price: 850000,
      beds: 5,
      baths: 4,
      sqft: 3000,
      feature: "Garden",
      type: "Custom Design",
      imageUrl: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1719319576/UltraSmart%20Homes/Project%201/WhatsApp_Image_2024-05-25_at_18.35.08_35cfa540_mhyycz.jpg",
    },
  ]

  const companyMetrics = [
    {
      number: "50+",
      label: "Projects Completed",
      icon: <Home className="h-8 w-8 text-estate-secondary" />,
    },
    {
      number: "10+",
      label: "Years of Engineering Experience",
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
          className="h-8 w-8 text-estate-secondary"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <Star className="h-8 w-8 text-estate-secondary" />,
    },
    {
      number: "10",
      label: "Industry Awards",
      icon: <Award className="h-8 w-8 text-estate-secondary" />,
    },
  ]

  const faqs = [
    {
      question: "How long does it typically take to build a custom home?",
      answer:
        "The timeline for building a custom home varies depending on size, complexity, and location. On average, our projects take 8-12 months from design approval to completion. We provide detailed timelines during the initial consultation and keep you updated throughout the process.",
    },
    {
      question: "What is the typical cost per square foot for your homes?",
      answer:
        "The cost per square foot varies based on design complexity, materials, finishes, and location. We work with you to develop a detailed budget that aligns with your vision and financial goals.",
    },
    {
      question: "Do you handle all aspects of the construction process?",
      answer:
        "Yes, we offer comprehensive services that cover every aspect of home construction. This includes architectural design, permitting, construction, interior design, and landscaping. Our integrated approach ensures a seamless experience and consistent quality throughout your project.",
    },
    {
      question: "How do you ensure quality construction?",
      answer:
        "Quality is our top priority. We maintain rigorous standards through careful material selection, skilled craftsmanship, regular inspections, and a dedicated quality assurance team. We also work with trusted subcontractors who share our commitment to excellence.",
    },
    {
      question: "What warranties do you offer on new homes?",
      answer:
        "We provide a comprehensive warranty package that includes a 1-year warranty on workmanship and materials, a 2-year warranty on systems (electrical, plumbing, HVAC), and a 10-year structural warranty. We also facilitate manufacturer warranties on appliances and fixtures.",
    },
    {
      question: "Can I make changes to the design during construction?",
      answer:
        "Yes, we understand that flexibility is important. While major changes are easier to accommodate early in the process, we have a structured change order process that allows for modifications during construction. Our team works with you to implement changes while minimizing impacts to timeline and budget.",
    },
  ]

  return (
    <>
      <section className="relative w-full min-h-[80vh] flex items-center">
        <HeroSlideshow images={heroImages} />

        <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6 animate-fade-in">
              Building Dreams, Creating Homes
            </h1>
            <p className="max-w-[600px] text-lg md:text-xl font-medium mb-8 animate-fade-in animation-delay-200">
              Premium real estate and custom home construction services tailored to your vision and lifestyle.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row animate-fade-in animation-delay-400">
              <Link href="/portfolio">
                <Button size="lg" className="w-full sm:w-auto bg-estate-primary hover:bg-estate-primary/90">
                  View Portfolio
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm hover:bg-white/20"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section background="light">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-estate-primary mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4">
              UltraSmart Constructions Limited is a construction company with clear values and result-oriented approach to every project. 
              We are building a reliable brand aimed at quality and timely delivery of projects and services to our clients.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Our team of experienced professionals is dedicated to helping you find your dream home. We offer services cutting across 
              Building and Construction, Real Estate Development, Consulting, Architectural and Structural Designs, and Bill of Quantity.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We also deal in general building materials and supplies and quality paints. Possessing an extensive technical know-how 
              with our teams of professionals, we ensure and assure top quality delivery, in time and within budget as of quantity 
              surveyors do their work perfectly.
            </p>
            <Link href="/about">
              <Button className="gap-1 bg-estate-primary hover:bg-estate-primary/90 transition-all duration-300 hover:gap-2">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md h-[400px] rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02] duration-500">
              <Image
                src="https://res.cloudinary.com/dtqrzl86y/image/upload/v1730216947/UltraSmart%20Homes/Engineers_kwnqgl.png"
                alt="UltraSmart Constructions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Why Choose UltraSmart Constructions"
          description="We deliver exceptional value through our commitment to quality, innovation, and client satisfaction."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuePropositions.map((value, i) => (
            <FeatureCard key={i} icon={value.icon} title={value.title} description={value.description} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Featured Projects"
          description="Browse through our portfolio of custom-built homes."
        />
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {featuredProperties.map((property, i) => (
            <PropertyCard key={i} {...property} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/portfolio">
            <Button
              variant="outline"
              className="gap-1 border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-white transition-all duration-300 hover:gap-2"
            >
              View All Properties
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>

      <Section background="primary">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Construction Services</h2>
              <p className="max-w-[600px] text-white/80 md:text-xl">
                From concept to completion, we handle every aspect of your custom home construction with precision and
                care.
              </p>
            </div>
            <ul className="grid gap-4">
              {[
                "Custom Home Design & Building",
                "Renovations & Remodeling",
                "Luxury Home Construction",
                "Sustainable & Green Building",
                "Interior Design Services",
                "Project Management",
              ].map((service, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-estate-secondary/20">
                    <Home className="h-4 w-4 text-estate-secondary" />
                  </div>
                  <span className="font-medium">{service}</span>
                </li>
              ))}
            </ul>
            <div>
              <Link href="/services">
                <Button className="gap-1 bg-estate-secondary text-estate-dark hover:bg-estate-secondary/90 transition-all duration-300 hover:gap-2">
                  Explore Our Services
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://res.cloudinary.com/dtqrzl86y/image/upload/v1738585353/UltraSmart%20Homes/helmet_y8aa37.webp"
                width={550}
                height={550}
                alt="Construction team at work"
                className="rounded-lg object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section background="light">
        <SectionHeading
          title="Our Impact By The Numbers"
          description="UltraSmart Constructions has a proven track record of excellence and client satisfaction."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companyMetrics.map((metric, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 transform transition-transform hover:scale-105 duration-300"
            >
              <div className="mb-4">{metric.icon}</div>
              <div className="text-4xl font-bold mb-2 text-estate-primary">{metric.number}</div>
              <p className="text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="What Our Clients Say"
          description="Hear from homeowners who trusted us with their dream homes."
        />
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              name: "Ake Johnson",
              role: "Homeowner",
              content:
                "UltraSmart Constructions transformed our vision into reality. Their attention to detail and commitment to quality exceeded our expectations.",
            },
            {
              name: "Chijioke Ejiofor",
              role: "Homeowner",
              content:
                "I've worked with many construction companies, but this company stands out for their professionalism, transparency, and timely delivery.",
            },
            {
              name: "Cephas Ayo",
              role: "First-time Homeowner",
              content:
                "As first-time homeowner, I was nervous about custom building. UltraSmart Constructions guided me through every step with patience and expertise.",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="pb-2">
                <div className="flex justify-center">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full bg-estate-secondary/20">
                    <Image
                      src={`/placeholder.svg?height=100&width=100&text=${i + 1}`}
                      width={100}
                      height={100}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold mt-2 text-estate-primary">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
              <div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQs Section */}
      <Section background="light">
        <SectionHeading
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services and process."
        />

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-estate-dark font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center">
            <p className="mb-4 text-muted-foreground">Still have questions? We're here to help.</p>
            <Link href="/contact">
              <Button className="bg-estate-primary hover:bg-estate-primary/90 transition-all duration-300">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}

