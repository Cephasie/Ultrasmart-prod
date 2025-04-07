import {
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import Image from 'next/image';

import { PageHeader } from '@/components/layout/page-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const faqs = [
    {
      question: "How do I start a project with UltraSmart Constructions?",
      answer:
        "The first step is to contact us through our form or phone. We'll schedule an initial consultation to discuss your needs, vision, and budget.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We primarily serve anywhere. We are at the service of our clients anywhere whereas our main office is located in Abuja.",
    },
    {
      question: "How long does the construction process take?",
      answer:
        "Project timelines vary based on scope and complexity. A typical custom home takes 8-12 months, while renovations may take 2-6 months.",
    },
    {
      question: "Do you offer financing options?",
      answer:
        "While we don't provide direct financing, we have partnerships with several financial institutions that offer competitive construction loans.",
    },
    {
      question: "What warranties do you provide?",
      answer:
        "We offer a comprehensive warranty package including a 1-year workmanship warranty, 2-year systems warranty, and 10-year structural warranty.",
    },
    {
      question: "Can I make changes during construction?",
      answer:
        "Yes, we accommodate changes through our structured change order process, though major changes are easier and more cost-effective earlier in the project.",
    },
  ]

  return (
    <>
      <PageHeader
        title="Get In Touch"
        description="We're here to answer your questions and help you start your journey with UltraSmart Constructions."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-estate-primary mb-4">
                Contact Information
              </h2>
              <p className="text-lg text-muted-foreground">
                Reach out to us through any of the following channels or fill out the contact form.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-estate-primary/10 group-hover:bg-estate-primary/20 transition-colors">
                  <MapPin className="h-5 w-5 text-estate-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Our Office</h3>
                  <p className="text-muted-foreground">
                  A15, Digiforte City, Abuja.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-estate-primary/10 group-hover:bg-estate-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-estate-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-muted-foreground">
                    Main: +2349030853690
                    {/* <br />
                    Sales: (555) 987-6543
                    <br />
                    Support: (555) 456-7890 */}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-estate-primary/10 group-hover:bg-estate-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-estate-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    General: ultrasmartconstructions@gmail.com
                    {/* <br />
                    Sales: ultrasmartconstructions@gmail.com
                    <br />
                    Support: ultrasmartconstructions@gmail.com */}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="https://res.cloudinary.com/dtqrzl86y/image/upload/v1719320004/UltraSmart%20Homes/logo_a9a1lc.jpg"
                alt="Office location map"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-estate-primary">Office Hours</h3>
              <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                <div>Monday - Friday</div>
                <div>9:00 AM - 6:00 PM</div>
                <div>Saturday</div>
                <div>10:00 AM - 5:00 PM</div>
                <div>Sunday</div>
                <div>Closed</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-estate-primary mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="first-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    First name
                  </label>
                  <Input id="first-name" placeholder="Enter your first name" className="focus:border-estate-primary" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="last-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Last name
                  </label>
                  <Input id="last-name" placeholder="Enter your last name" className="focus:border-estate-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <Input id="email" placeholder="Enter your email" type="email" className="focus:border-estate-primary" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Phone
                </label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  type="tel"
                  className="focus:border-estate-primary"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Subject
                </label>
                <Input id="subject" placeholder="What is this regarding?" className="focus:border-estate-primary" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project or inquiry"
                  className="min-h-[150px] focus:border-estate-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-estate-primary focus:ring-estate-primary"
                  />
                  <span>I agree to the privacy policy and terms of service</span>
                </label>
              </div>
              <Button className="w-full bg-estate-primary hover:bg-estate-primary/90 transition-all duration-300">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section background="light">
        <SectionHeading
          title="Frequently Asked Questions"
          description="Find quick answers to common questions about working with UltraSmart Constructions."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-left"
            >
              <h3 className="text-lg font-medium text-estate-primary mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

