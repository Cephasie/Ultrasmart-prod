import type React from 'react';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t bg-estate-dark text-white">
        <div className="container flex flex-col gap-6 py-12 md:flex-row md:gap-8">
          <div className="flex flex-col gap-3 md:w-1/3">
            <div className="flex items-center gap-2">
              {/* <Building className="h-6 w-6 text-estate-secondary" /> */}
              <span className="text-xl font-bold text-estate-secondary">UltraSmart Constructions</span>
            </div>
            <p className="text-sm text-white/70">Building quality homes and lasting relationships since 2023.</p>
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
              <Link href="https://www.instagram.com/ultrasmart_constructions_ltd?igsh=MXB4Y2MzOGd5d3NnMQ%3D%3D" className="text-white/70 hover:text-estate-secondary">
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
                  <Link href="/services" className="text-white/70 hover:text-estate-secondary">
                    Custom Homes
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white/70 hover:text-estate-secondary">
                    Renovations
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white/70 hover:text-estate-secondary">
                    Interior Design
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white/70 hover:text-estate-secondary">
                    Project Management
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-estate-secondary">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
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
                    className="h-4 w-4 mt-0.5 text-estate-secondary"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-white/70">
                  A15, Digiforte City, Abuja.
                  </span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-4 w-4 text-estate-secondary"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="text-white/70">+2349030853690</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-4 w-4 text-estate-secondary"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="text-white/70 hover:text-estate-secondary"><a href="mailto:ultrasmartconstructions@gmail.com">ultrasmartconstructions@gmail.com</a></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-white/70 md:text-left">
              © {new Date().getFullYear()} Designed and built by <span className="text-white/70 hover:text-estate-secondary"><a href="mailto:hembacephas@gmail.com">Cephas Hemba</a></span> for UltraSmart Constructions Limited. All rights reserved.
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
    // <footer className="w-full border-t bg-estate-dark text-white">
    //   <div className="container flex flex-col gap-6 py-12 md:flex-row md:gap-8">
    //     <div className="flex flex-col gap-3 md:w-1/3">
    //       <div className="flex items-center gap-2">
    //         {/* <Building className="h-6 w-6 text-estate-secondary" /> */}
    //         <span className="text-xl font-bold text-estate-secondary">UltraSmart Constructions</span>
    //       </div>
    //       <p className="text-sm text-white/70">Building quality homes and lasting relationships since 2023.</p>
    //       <div className="flex gap-4">
    //         <SocialLink href="#" icon="facebook" />
    //         <SocialLink href="#" icon="twitter" />
    //         <SocialLink href="#" icon="instagram" />
    //       </div>
    //     </div>
    //     <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
    //       <FooterColumn title="Company">
    //         <FooterLink href="/about">About Us</FooterLink>
    //         <FooterLink href="/team">Our Team</FooterLink>
    //         <FooterLink href="/careers">Careers</FooterLink>
    //         <FooterLink href="/contact">Contact Us</FooterLink>
    //       </FooterColumn>
    //       <FooterColumn title="Services">
    //         <FooterLink href="/services">Custom Homes</FooterLink>
    //         <FooterLink href="/services">Renovations</FooterLink>
    //         <FooterLink href="/services">Interior Design</FooterLink>
    //         <FooterLink href="/services">Project Management</FooterLink>
    //       </FooterColumn>
    //       <FooterColumn title="Contact">
    //         <li className="flex items-start gap-2">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             className="h-4 w-4 mt-0.5 text-estate-secondary"
    //           >
    //             <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    //             <circle cx="12" cy="10" r="3" />
    //           </svg>
    //           <span className="text-white/70">
    //           A15, Digiforte City, Abuja.
    //           </span>
    //         </li>
    //         <li className="flex items-center gap-2">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             className="h-4 w-4 text-estate-secondary"
    //           >
    //             <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    //           </svg>
    //           <span className="text-white/70">+2349030853690</span>
    //         </li>
    //         <li className="flex items-center gap-2">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             className="h-4 w-4 text-estate-secondary"
    //           >
    //             <rect width="20" height="16" x="2" y="4" rx="2" />
    //             <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    //           </svg>
    //           <span className="text-white/70">ultrasmartconstructions@gmail.com</span>
    //         </li>
    //       </FooterColumn>
    //     </div>
    //   </div>
    //   <div className="border-t border-white/10 py-6">
    //     <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
    //       <p className="text-center text-sm text-white/70 md:text-left">
    //       Designed and built by Cephas Hemba. All rights reserved © {new Date().getFullYear()} UltraSmart Constructions Limited.
    //       </p>
    //       <p className="text-center text-sm text-white/70 md:text-left">
    //         <Link href="/privacy" className="underline underline-offset-4 hover:text-estate-secondary">
    //           Privacy Policy
    //         </Link>{" "}
    //         |{" "}
    //         <Link href="/terms" className="underline underline-offset-4 hover:text-estate-secondary">
    //           Terms of Service
    //         </Link>
    //       </p>
    //     </div>
    //   </div>
    // </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-estate-secondary">{title}</h3>
      <ul className="space-y-2 text-sm">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-white/70 hover:text-estate-secondary transition-colors">
        {children}
      </Link>
    </li>
  )
}

function SocialLink({ href, icon }: { href: string; icon: "facebook" | "twitter" | "instagram" }) {
  const icons = {
    facebook: (
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
    ),
    twitter: (
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
    ),
    instagram: (
      <Link href="https://www.instagram.com/ultrasmart_constructions_ltd?igsh=MXB4Y2MzOGd5d3NnMQ%3D%3D" className="text-white/70 hover:text-estate-secondary">
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
    ),
  }

  return (
    <Link href={href} className="text-white/70 hover:text-estate-secondary transition-colors">
      {icons[icon]}
      <span className="sr-only">{icon.charAt(0).toUpperCase() + icon.slice(1)}</span>
    </Link>
  )
}

