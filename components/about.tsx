"use client"

import { useEffect, useState, useRef } from "react"

export default function About() {
  const [mounted, setMounted] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const isMobile = window.innerWidth < 768
    const spacing = isMobile ? 30 : 40
    const dotRadius = isMobile ? 1 : 2
    const opacity = isMobile ? 0.15 : 0.2

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = `rgba(172, 194, 239, ${opacity})`

    for (let x = 0; x < canvas.width; x += spacing) {
      for (let y = 0; y < canvas.height; y += spacing) {
        ctx.beginPath()
        ctx.arc(x, y, dotRadius, 0, Math.PI * 2)
        ctx.fill()
      }
    }
  }, [mounted])

  return (
    <section id="about" className="relative max-w-6xl mx-auto px-6 py-20">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className={`space-y-8 ${mounted ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
        <div className="space-y-2">
          <p className="text-sm font-mono text-secondary">ABOUT ME</p>
          <h2 className="text-3xl md:text-4xl font-bold">Who I am</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-5 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a Software Engineer with 4+ years of experience specializing in frontend development with full-stack
              capabilities. I focus on building scalable, high-performance applications with Angular, TypeScript, and
              Java/Spring Boot, with particular expertise in WebRTC and AI integration.
            </p>
          </div>
          <div className="p-3 rounded-lg border border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm passionate about real-time communication technologies, performance optimization, and AI-powered
              testing. I love building elegant solutions to complex problems and staying at the cutting edge of web
              technologies. When not coding, I focus on shipping quality products and continuous learning.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border">
          <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
            <p className="text-primary text-sm font-mono mb-2">Location</p>
            <p className="text-foreground font-medium">India</p>
          </div>
          <div className="p-3 rounded-lg bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20">
            <p className="text-secondary text-sm font-mono mb-2">Experience</p>
            <p className="text-foreground font-medium">4+ Years</p>
          </div>
          <div className="p-3 rounded-lg bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
            <p className="text-accent text-sm font-mono mb-2">Education</p>
            <p className="text-foreground font-medium">B.E Computer Science</p>
          </div>
          <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
            <p className="text-primary text-sm font-mono mb-2">Status</p>
            <p className="text-foreground font-medium">Open to work</p>
          </div>
        </div>
      </div>
    </section>
  )
}
