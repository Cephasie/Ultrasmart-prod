import {
  Calendar,
  CheckCircle,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { PageHeader } from '@/components/layout/page-header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About UltraSmart Constructions"
        description="Building dreams and creating exceptional living spaces since 2023."
        className="bg-estate-primary"
      >
        <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
          <Link href="/contact">
            <Button className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/10">Contact Us</Button>
          </Link>
          <Link href="/portfolio">
            <Button variant="outline" className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20">
              View Our Work
            </Button>
          </Link>
        </div>
      </PageHeader>

      <Section>
        <SectionHeading
          title="Our Story"
          description="From light beginnings to becoming a leading name in real estate and construction."
        />

        <div className="mx-auto max-w-3xl space-y-8">
          {[
            {
              year: "2023",
              title: "Foundation",
              description:
                "UltraSmart Constructions Homes was founded by Engr. Kingsley Zege with a vision to create homes that combine functionality, aesthetics, and sustainability.",
            },
            {
              year: "2024",
              title: "Expansion",
              description:
                "After the early successful years and over 50 completed projects, we expanded our services to include commercial construction and renovation.",
            },
            {
              year: "2024",
              title: "Innovation",
              description:
                "We pioneered the integration of sustainable building practices in all our projects. Our commitment to eco-friendly construction earned us industry recognition and awards.",
            },
            {
              year: "2025",
              title: "Digital Transformation",
              description:
                "We embraced technology to enhance our client experience, implementing virtual reality home tours, 3D modeling, and a comprehensive digital platform for project management and client communication.",
            },
            {
              year: "Today",
              title: "Industry Leadership",
              description:
                "With a portfolio of over 50 successful projects and a team of expert professionals, UltraSmart Constructions is set to lead in real estate and construction industry. We continue to innovate, inspire, and create exceptional living spaces that our clients are proud to call home.",
            },
          ].map((milestone, i, arr) => (
            <div key={i} className="relative pl-8 pb-8 border-l border-muted-foreground/20 last:pb-0 last:border-0">
              <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-estate-primary -translate-x-1/2 transform transition-transform hover:scale-110 duration-300">
                <Calendar className="h-3 w-3 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">
                {milestone.year}: {milestone.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{milestone.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="light">
        <SectionHeading
          title="Our Values"
          description="The principles that guide everything we do at UltraSmart Constructions."
        />

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {[
            {
              title: "Quality Craftsmanship",
              description:
                "We believe in doing things right the first time. Our attention to detail and commitment to excellence ensures that every project meets the highest standards of quality and durability.",
            },
            {
              title: "Client-Centered Approach",
              description:
                "Your vision drives our work. We listen carefully to your needs and preferences, collaborating closely with you throughout the process to create spaces that truly reflect your lifestyle.",
            },
            {
              title: "Integrity & Transparency",
              description:
                "Integrity is the foundation of our business. We provide clear communication, detailed estimates, and regular updates, ensuring there are no surprises along the way.",
            },
            {
              title: "Innovation",
              description:
                "We continuously explore new techniques, materials, and technologies to enhance our designs and construction methods, delivering homes that are both timeless and forward-thinking.",
            },
            {
              title: "Sustainability",
              description:
                "We're committed to environmentally responsible building practices. From energy-efficient designs to eco-friendly materials, we strive to minimize our environmental footprint.",
            },
            {
              title: "Community Impact",
              description:
                "We believe in giving back to the communities where we build. Through charitable initiatives and local partnerships, we aim to make a positive difference beyond our construction projects.",
            },
          ].map((value, i) => (
            <Card
              key={i}
              className="bg-background transition-all duration-300 hover:shadow-md transform hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Meet Our Team"
          description="The talented professionals behind UltraSmart Constructions' success."
        />

        <Tabs defaultValue="leadership" className="mt-7">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
              <TabsTrigger value="architects">Architects</TabsTrigger>
              <TabsTrigger value="project-managers">Project Managers</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="leadership" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {[
                {
                  name: "Engr Kingsley Zege",
                  role: "Founder & CEO",
                  bio: "With expert experience in construction and real estate development, Kingsley leads our company with vision and expertise.",
                  image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1744061702/kings_cobzc8.jpg",
                },
                // {
                //   name: "Engr Kingsley Zege",
                //   role: "Co-Founder & Design Director",
                //   bio: "Zege's innovative design approach and attention to detail have shaped our company's aesthetic and commitment to quality.",
                //   image: "/placeholder.svg?height=300&width=300&text=SM",
                // },
                {
                  name: "Engr Kingsley Zege",
                  role: "Chief Operations Officer",
                  bio: "Kingsley ensures that every project runs smoothly, overseeing our operations with precision and efficiency.",
                  image: "/placeholder.svg?height=300&width=300&text=MR",
                },
                {
                  name: "Engr Kingsley Zege",
                  role: "Chief Financial Officer",
                  bio: "Zege's financial acumen has been instrumental in our company's growth and sustainable business practices.",
                  image: "/placeholder.svg?height=300&width=300&text=JL",
                },
              ].map((member, i) => (
                <TeamMemberCard key={i} {...member} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="architects" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {[
                {
                  name: "Engr Kingsley Zege",
                  role: "Principal Architect",
                  bio: "Zege's award-winning designs blend functionality with aesthetic beauty, creating spaces that inspire and endure.",
                  image: "/placeholder.svg?height=300&width=300&text=DC",
                },
                {
                  name: "Engr Kingsley Zege",
                  role: "Sustainable Design Specialist",
                  bio: "Kingsley leads our eco-friendly initiatives, ensuring our designs are both beautiful and environmentally responsible.",
                  image: "/placeholder.svg?height=300&width=300&text=SP",
                },
                {
                  name: "Engr Kingsley Zege",
                  role: "Interior Architecture Lead",
                  bio: "Zege transforms interiors into cohesive, functional spaces that reflect each client's unique personality and needs.",
                  image: "/placeholder.svg?height=300&width=300&text=MJ",
                },
                // {
                //   name: "Engr Kingsley Zege",
                //   role: "Residential Design Expert",
                //   bio: "He specializes in creating homes that perfectly balance luxury, comfort, and practical living.",
                //   image: "/placeholder.svg?height=300&width=300&text=EW",
                // },
              ].map((member, i) => (
                <TeamMemberCard key={i} {...member} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="project-managers" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {[
                {
                  name: "Engr Kingsley Zege",
                  role: "Senior Project Manager",
                  bio: "Zege brings 15 years of experience to every project, ensuring timely completion and exceptional quality.",
                  image: "/placeholder.svg?height=300&width=300&text=TG",
                },
                {
                  name: "Engr Kingsley Zege",
                  role: "Client Relations Manager",
                  bio: "He excels at understanding client needs and ensuring their vision is realized throughout the construction process.",
                  image: "/placeholder.svg?height=300&width=300&text=RK",
                },
                // {
                //   name: "Engr Kingsley Zege",
                //   role: "Construction Manager",
                //   bio: "He oversees our construction teams with expertise and precision, maintaining our high standards on every site.",
                //   image: "/placeholder.svg?height=300&width=300&text=JW",
                // },
                {
                  name: "Engr Kingsley Zege",
                  role: "Quality Assurance Lead",
                  bio: "Zege's meticulous attention to detail ensures that every aspect of our projects meets our exacting standards.",
                  image: "/placeholder.svg?height=300&width=300&text=OM",
                },
              ].map((member, i) => (
                <TeamMemberCard key={i} {...member} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      <Section background="light">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-2">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-estate-primary">
                Why Choose Us
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                What sets UltraSmart Constructions apart from the competition.
              </p>
            </div>
            <ul className="grid gap-4">
              {[
                // "5+ years of industry experience",
                "50+ successful projects completed",
                "Award-winning designs and construction",
                "Sustainable building practices",
                "Transparent pricing and timelines",
                "Comprehensive warranty on all work",
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-2 group">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-estate-primary/10 group-hover:bg-estate-primary/20 transition-colors">
                    <CheckCircle className="h-4 w-4 text-estate-primary" />
                  </div>
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
            <div>
              <Link href="/contact">
                <Button className="gap-1 transition-all duration-300 hover:gap-2">Start Your Project</Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://res.cloudinary.com/dtqrzl86y/image/upload/v1719319579/UltraSmart%20Homes/Project%201/WhatsApp_Image_2024-05-25_at_18.35.05_1c9934d9_tvhek4.jpg"
                width={550}
                height={550}
                alt="Award-winning home built by UltraSmart Constructions"
                className="rounded-lg object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* <Section>
        <SectionHeading
          title="Our Achievements"
          description="Recognition of our commitment to excellence in real estate and construction."
        />

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            {
              year: "2023",
              award: "Best Sustainable Home Design",
              organization: "Green Building Council",
            },
            {
              year: "2023",
              award: "Construction Company of the Year",
              organization: "Regional Business Excellence Awards",
            },
            {
              year: "2023",
              award: "Innovation in Residential Construction",
              organization: "National Homebuilders Association",
            },
            {
              year: "2023",
              award: "Best Luxury Home Development",
              organization: "Real Estate Excellence Awards",
            },
            {
              year: "2023",
              award: "Customer Satisfaction Award",
              organization: "Homeowner's Choice Awards",
            },
            {
              year: "2023",
              award: "Best Interior Design",
              organization: "Design & Architecture Awards",
            },
            {
              year: "2023",
              award: "Community Impact Award",
              organization: "Chamber of Commerce",
            },
            {
              year: "2023",
              award: "Quality Craftsmanship Award",
              organization: "Builder's Guild",
            },
          ].map((achievement, i) => (
            <Card key={i} className="transition-all duration-300 hover:shadow-md transform hover:-translate-y-1">
              <CardHeader className="pb-2">
                <CardDescription>{achievement.year}</CardDescription>
                <CardTitle className="text-lg">{achievement.award}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{achievement.organization}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section> */}

      <Section background="muted">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-estate-primary">
              Ready to Build Your Dream?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Let's start a conversation about your vision for the perfect home.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
            <Link href="/contact">
              <Button size="lg" className="w-full transition-all duration-300 hover:scale-105">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="w-full transition-all duration-300 hover:scale-105">
                Explore Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  image: string
}

function TeamMemberCard({ name, role, bio, image }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md transform hover:-translate-y-1">
      <div className="aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          width={300}
          height={300}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground">{bio}</p>
      </CardContent>
    </Card>
  )
}

