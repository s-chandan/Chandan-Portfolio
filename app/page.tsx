import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, ExternalLink, Code, Palette, Smartphone, Heart, Star, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ScrollHeader from "@/components/ScrollHeader"
import SocialMediaButton from "@/components/SocialMediaButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import { socialConfig } from "@/lib/config"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-slate-900 dark:to-purple-900">
      {/* Navigation */}
      <ScrollHeader />

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 relative overflow-hidden min-h-screen flex items-center">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="29.jpg"
            alt="Creative Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Gradient Blur Overlay - Strong on left, fades to middle */}
        <div className="absolute inset-0 z-5">
          <div
            className="h-full w-full"
            style={{
              background: `linear-gradient(to right, 
                rgba(0,0,0,0.7) 0%, 
                rgba(0,0,0,0.5) 20%, 
                rgba(0,0,0,0.3) 40%, 
                rgba(0,0,0,0.1) 60%, 
                transparent 80%
              )`,
              backdropFilter: `blur(0px)`,
            }}
          >
            <div
              className="h-full w-full"
              style={{
                backdropFilter: `blur(20px) saturate(120%)`,
                background: `linear-gradient(to right, 
                  rgba(255,255,255,0.1) 0%, 
                  rgba(255,255,255,0.05) 30%, 
                  transparent 60%
                )`,
              }}
            ></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side Content */}
            <div className="text-center lg:text-left flex flex-col justify-between h-full py-8">
              {/* Top content (if any, currently empty for mobile) */}
              <div className="flex-grow"></div>

              {/* Main Content Block - Reordered for mobile */}
              <div className="flex flex-col items-center lg:items-start">
                {/* Description (smaller for mobile) */}
                {/* <p
                  className="text-sm md:text-lg text-white/85 mb-6 animate-fade-in-up leading-relaxed drop-shadow-md max-w-2xl mx-auto lg:mx-0"
                  style={{ animationDelay: "0.3s" }}
                >
                  Passionate about creating beautiful, functional, and user-friendly applications. Specializing in
                  React, Next.js, and modern web technologies with a touch of creativity! 💫
                </p> */}

                {/* Name and Title (at the bottom of this content block) */}
                <h1 className="text-4xl md:text-6x1 lg:text-7xl xl:text-8x1 font-bold mb-4 animate-fade-in-up text-left">
                    <span className="bg-gradient-to-r from-white via-rose-200 to-pink-200 bg-clip-text text-transparent drop-shadow-2x1">
                      hello, i'm <span className="uppercase">Chandan Sharma</span>
                  </span>
                </h1>
                <div className="relative inline-block mb-4">
                  <p
                    className="text-lg md:text-2x1 lg:text-3xl text-white/70 animate-fade-in-up font-medium drop-shadow-lg"
                    style={{ animationDelay: "0.2s" }}
                  >
                    full-stack developer & Tester
                  </p>
                  <div
                    className="absolute -bottom-3 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full animate-fade-in-up"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Right Side - Empty space for image visibility */}
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* Right Side Decorative Elements (hidden on mobile) */}
        <div className="absolute right-0 top-0 w-1/2 h-full z-5 hidden lg:block">
          <div className="absolute top-32 right-32 text-white/20 animate-bounce delay-700">
            <Heart className="w-10 h-10" />
          </div>
          <div className="absolute top-80 right-20 text-white/20 animate-pulse delay-1000">
            <Star className="w-8 h-8" />
          </div>
          <div className="absolute top-96 right-80 text-white/20 animate-bounce delay-300">
            <Sparkles className="w-7 h-7" />
          </div>
          <div className="absolute top-40 right-40 w-48 h-48 bg-gradient-to-r from-rose-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-80 right-20 w-40 h-40 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-3xl animate-bounce delay-1000"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
            About Me ✨
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-semibold mb-4 text-slate-700 dark:text-slate-200">
                Hello! I'm a passionate creative developer 💫
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                With over 2 years of experience in web development, I specialize in creating modern, responsive, and
                user-friendly applications. I love turning complex problems into simple, beautiful designs with a touch
                of creativity!
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new design trends, creating digital art, or sharing
                knowledge with the developer community. I believe in making the web more beautiful, one project at a
                time! 🌸
              </p>
              <div className="grid grid-cols-2 gap-4 text-center hidden md:grid">
                <div className="bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900 dark:to-pink-900 p-4 rounded-xl">
                  <h4 className="text-2xl font-bold text-rose-600 dark:text-rose-400">50+</h4>
                  <p className="text-slate-600 dark:text-slate-300">Projects Completed</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 p-4 rounded-xl">
                  <h4 className="text-2xl font-bold text-purple-600 dark:text-purple-400">2+</h4>
                  <p className="text-slate-600 dark:text-slate-300">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Image Gallery Section */}
            <div className="relative animate-fade-in-right">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px]">
                {/* Main Big Image - Takes 2 columns on desktop, full on mobile */}
                <div className="col-span-1 md:col-span-2 relative group">
                  <Image
                    src="/0.jpg"
                    alt="Main Workspace"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Small Images Column - Hidden on mobile, shown on medium screens and up */}
                <div className="hidden md:flex flex-col gap-4">
                  {/* Small Image 1 */}
                  <div className="relative group flex-1">
                    <Image
                      src="/1.jpg"
                      alt="Creative Setup"
                      width={200}
                      height={190}
                      className="w-full h-full object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Small Image 2 */}
                  <div className="relative group flex-1">
                    <Image
                      src="/2.jpg"
                      alt="Design Process"
                      width={200}
                      height={190}
                      className="w-full h-full object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl opacity-60 animate-bounce"></div>
              <div className="absolute top-1/2 -right-2 w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full blur-lg opacity-40 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies 🚀
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 border-rose-200 dark:border-rose-800">
              <CardHeader>
                <Code className="w-12 h-12 mx-auto text-rose-500 mb-4 animate-bounce" />
                <CardTitle className="text-slate-700 dark:text-slate-200">Frontend Development</CardTitle>
                <CardDescription>Building responsive and interactive user interfaces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-200">
                    React
                  </Badge>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-700 hover:bg-pink-200">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-200">
                    Tailwind CSS
                  </Badge>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-700 hover:bg-pink-200">
                    JavaScript
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
              <CardHeader>
                <Smartphone className="w-12 h-12 mx-auto text-purple-500 mb-4 animate-pulse" />
                <CardTitle className="text-slate-700 dark:text-slate-200">Backend Development</CardTitle>
                <CardDescription>Creating robust and scalable server-side applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-700 hover:bg-pink-200">
                    Express
                  </Badge>
                  <Badge variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-200">
                    MongoDB
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                    PostgreSQL
                  </Badge>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-700 hover:bg-pink-200">
                    API Design
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border-pink-200 dark:border-pink-800">
              <CardHeader>
                <Palette className="w-12 h-12 mx-auto text-pink-500 mb-4 animate-bounce delay-300" />
                <CardTitle className="text-slate-700 dark:text-slate-200">Design & Tools</CardTitle>
                <CardDescription>Designing beautiful and functional user experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="bg-pink-100 text-pink-700 hover:bg-pink-200">
                    Figma
                  </Badge>
                  <Badge variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-200">
                    Git
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                    Docker
                  </Badge>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-700 hover:bg-pink-200">
                    AWS
                  </Badge>
                  <Badge variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-200">
                    Vercel
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
            Featured Projects 💖
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 border-rose-200 dark:border-rose-800">
              <div className="relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop"
                  alt="E-commerce Platform"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-200">E-commerce Platform</CardTitle>
                <CardDescription>
                  A full-stack e-commerce solution with payment integration, admin dashboard, and inventory management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs border-rose-200 text-rose-700">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs border-pink-200 text-pink-700">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="text-xs border-purple-200 text-purple-700">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="text-xs border-rose-200 text-rose-700">
                    Stripe
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
              <div className="relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop"
                  alt="Task Management App"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-200">Task Management App</CardTitle>
                <CardDescription>
                  A collaborative task management application with real-time updates, team collaboration, and progress
                  tracking.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs border-purple-200 text-purple-700">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="text-xs border-pink-200 text-pink-700">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs border-rose-200 text-rose-700">
                    Prisma
                  </Badge>
                  <Badge variant="outline" className="text-xs border-purple-200 text-purple-700">
                    Socket.io
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border-pink-200 dark:border-pink-800">
              <div className="relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=200&fit=crop"
                  alt="Weather App"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-200">Weather Forecast App</CardTitle>
                <CardDescription>
                  A beautiful weather application with location-based forecasts, interactive maps, and detailed weather
                  analytics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs border-pink-200 text-pink-700">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs border-rose-200 text-rose-700">
                    API Integration
                  </Badge>
                  <Badge variant="outline" className="text-xs border-purple-200 text-purple-700">
                    Charts.js
                  </Badge>
                  <Badge variant="outline" className="text-xs border-pink-200 text-pink-700">
                    PWA
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
            Let's Work Together ✨
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
            creative ideas to life! 💫
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <WhatsAppButton phoneNumber="+91 8825288228" message="Hi Chandan, I saw your portfolio website and want to connect..." />
            <div className="flex space-x-3">
              <SocialMediaButton platform="instagram" url="https://www.instagram.com/chandansharma1437?" />
              <SocialMediaButton platform="facebook" url="https://www.facebook.com/share/19MXH74fnj/" />
              {/* <SocialMediaButton platform="linkedin" url="" /> */}
              <SocialMediaButton platform="twitter" url="https://x.com/buyourorder?t=FtjYCi9qgKVQnJmJRGR89Q&s=08" />
              <SocialMediaButton platform="youtube" url="https://youtube.com/@chandanreally?si=kJBilAOyf9HQ8hEu" />
              <Link href={`mailto:"chandanreally07@gmail.com"`}>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-rose-50 dark:hover:bg-rose-900/20 bg-white/80 border-rose-200 hover:border-rose-300 hover:scale-110 transition-all duration-300"
                >
                  <Mail className="w-4 h-4 text-slate-600" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-rose-900 via-pink-900 to-purple-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-rose-200">Chandu©2025 Portfolio™, All right reserved. 💖</p>
        </div>
      </footer>
    </div>
  )
}
