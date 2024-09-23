'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Text as DreiText } from '@react-three/drei'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarIcon, FileTextIcon, HeartPulseIcon, UserIcon, VideoIcon, CheckCircleIcon } from 'lucide-react'
import placeholderImage from '@/assets/Brick labs AI-56.jpg'
import Image1 from '@/assets/Designer.png'
import Image2 from '@/assets/Designer (5).jpeg'

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => {
  return (
    <Card className="transition-transform transform hover:scale-105 hover:shadow-lg p-6 bg-white rounded-lg">
      <CardHeader>
        <Icon className="h-10 w-10 text-primary mb-4" />
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

const TestimonialCard = ({ name, role, testimonial, image }: TestimonialCardProps) => {
  return (
    <Card className="h-full bg-white shadow-md rounded-lg p-6">
      <CardHeader className="flex items-center space-x-4">
        <Image
          src={placeholderImage}
          alt={name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <CardTitle className="text-lg font-semibold">{name}</CardTitle>
          <CardDescription className="text-gray-500">{role}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-4">
        <p className="text-gray-600">{testimonial}</p>
      </CardContent>
    </Card>
  )
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('patients')
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-white/90 backdrop-blur z-50 shadow-md">
        <Link className="flex items-center" href="/">
          <HeartPulseIcon className="h-8 w-8 text-primary" />
          <span className="ml-3 text-2xl font-bold text-primary">TeleMed</span>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link className="text-sm font-medium text-gray-700 hover:text-primary transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium text-gray-700 hover:text-primary transition-colors" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium text-gray-700 hover:text-primary transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 mt-16">
        {/* Hero Section */}
        <section className="w-full py-20 bg-gradient-to-b from-white to-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800">
                  Revolutionizing Healthcare with TeleMed and AI
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-gray-600">
                  Connect with patients, manage appointments, and provide care from anywhere. Experience the future of telemedicine.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="/onboarding">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                    <Link href="/login">Log In</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Image on the right */}
              <div className="relative w-full h-96 lg:h-[500px]">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={Image1}
                  alt="3D Model"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg h-20 w-20" // Adjusted size
                />
              </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12">
              Powerful Features for Modern Healthcare
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={VideoIcon}
                title="HD Video Consultations"
                description="Conduct face-to-face consultations with patients from anywhere, with crystal-clear video and audio."
              />
              <FeatureCard
                icon={CalendarIcon}
                title="Smart Appointment Management"
                description="Efficiently manage and schedule patient appointments with our AI-powered scheduling system."
              />
              <FeatureCard
                icon={FileTextIcon}
                title="Secure Electronic Health Records"
                description="Store and access patient records digitally with military-grade encryption and HIPAA compliance."
              />
              <FeatureCard
                icon={UserIcon}
                title="Patient Portal"
                description="Empower patients with easy access to their health information, test results, and treatment plans."
              />
              <FeatureCard
                icon={HeartPulseIcon}
                title="Remote Patient Monitoring"
                description="Monitor patients' vital signs and health data remotely with integrated IoT device support."
              />
              <FeatureCard
                icon={CheckCircleIcon}
                title="E-Prescriptions"
                description="Safely prescribe and manage medications online with our integrated e-prescription system."
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12">
              What Our Users Say
            </h2>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-3 gap-2 mb-8">
                <TabsTrigger value="patients" className="py-2 text-sm font-medium text-gray-700 hover:text-primary">
                  Patients
                </TabsTrigger>
                <TabsTrigger value="doctors" className="py-2 text-sm font-medium text-gray-700 hover:text-primary">
                  Doctors
                </TabsTrigger>
                <TabsTrigger value="admins" className="py-2 text-sm font-medium text-gray-700 hover:text-primary">
                  Admins
                </TabsTrigger>
              </TabsList>
              <TabsContent value="patients">
                <TestimonialCard
                  name="Sarah Johnson"
                  role="Patient"
                  testimonial="TeleMed has made it so easy for me to consult with my doctor from the comfort of my home. The video quality is excellent, and the appointment scheduling is a breeze!"
                  image="/placeholder.svg"
                />
              </TabsContent>
              <TabsContent value="doctors">
                <TestimonialCard
                  name="Dr. Michael Chen"
                  role="Cardiologist"
                  testimonial="As a doctor, TeleMed has revolutionized the way I practice. The platform is intuitive, secure, and allows me to provide high-quality care to my patients remotely."
                  image="/placeholder.svg"
                />
              </TabsContent>
              <TabsContent value="admins">
                <TestimonialCard
                  name="Emily Rodriguez"
                  role="Hospital Administrator"
                  testimonial="TeleMed has streamlined our telemedicine services. The comprehensive dashboard and analytics tools have greatly improved our operational efficiency."
                  image="/placeholder.svg"
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-20 bg-gradient-to-b from-white to-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
                  Join the TeleMed Revolution
                </h2>
                <p className="mt-6 text-lg sm:text-xl text-gray-600">
                  Experience the future of healthcare delivery. Sign up now and transform the way you provide care.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center text-gray-700">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-3" />
                    <span>30-day free trial</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-3" />
                    <span>No credit card required</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircleIcon className="h-6 w-6 text-primary mr-3" />
                    <span>24/7 customer support</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link href="/register">Start Your Free Trial</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Image on the right */}
              <div className="relative w-full h-96 lg:h-[500px]">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={Image2}
                  alt="3D Model"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg h-20 w-20" // Adjusted size
                />
              </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
                Get in Touch
              </h2>
              <p className="max-w-2xl text-lg sm:text-xl text-gray-600">
                Have questions? We're here to help. Reach out to our team for support or inquiries.
              </p>
              <Card className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Contact Us</CardTitle>
                  <CardDescription className="text-gray-500">
                    Fill out the form below and we'll get back to you shortly.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-6">
                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="block text-gray-700">Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <Label htmlFor="email" className="block text-gray-700">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" required />
                    </div>
                    <div>
                      <Label htmlFor="message" className="block text-gray-700">Message</Label>
                      <textarea
                        id="message"
                        className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                        placeholder="Your message"
                        rows={4}
                        required
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-white border-t">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© 2024 TeleMed. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 sm:mt-0">
            <Link className="text-sm text-gray-600 hover:text-primary transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm text-gray-600 hover:text-primary transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm text-gray-600 hover:text-primary transition-colors" href="#">
              Cookie Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
