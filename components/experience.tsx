"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}

export default function Experience() {
  const [mounted, setMounted] = useState(false)
  const [visibleExperience, setVisibleExperience] = useState<boolean[]>([false, false, false])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-exp-index") || "0")
            setVisibleExperience((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        })
      },
      { threshold: 0.3 },
    )

    document.querySelectorAll("[data-experience]").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [mounted])

  const experiences: ExperienceItem[] = [
    {
      title: "Software Engineer",
      company: "digital.ai (formerly Experitest)",
      period: "Jun 2022 - Present",
      description:
        "Leading development of AI-powered test creation, reducing production bundle size by 40%, implementing WebRTC-based live device streaming (60fps), and building no-code test automation tools.",
      skills: ["Angular 19", "TypeScript", "Java/Spring Boot", "WebRTC", "RxJS", "Performance Optimization"],
    },
    {
      title: "Full Stack Developer",
      company: "Legal & General, TCS",
      period: "Aug 2021 - Jun 2022",
      description:
        "Automated CSV/Excel template generation using Java Apache APIs, created UI components in Angular 13, and implemented daily deployment pipelines using Jenkins.",
      skills: ["Java/Spring", "Angular 13", "HTML/CSS", "TypeScript", "AWS", "Jenkins"],
    },
    {
      title: "Web Development Intern",
      company: "TCS",
      period: "Mar 2021 - Jun 2021",
      description:
        "Automated vehicle damage assessment using React JS and Django REST Framework, integrating ML models for insurance analytics and repair cost prediction.",
      skills: ["React JS", "Django REST", "JavaScript", "Machine Learning", "Web Development"],
    },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
      <div className={`space-y-12 ${mounted ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
        <div className="space-y-2">
          <p className="text-sm font-mono text-accent">EXPERIENCE</p>
          <h2 className="text-3xl md:text-4xl font-bold">Work History</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-experience
              data-exp-index={index}
              onMouseMove={handleMouseMove}
              className={`group p-5 rounded-lg border border-border/50 bg-gradient-to-r transition-all duration-500 relative overflow-hidden ${
                visibleExperience[index]
                  ? "from-card/50 to-card/30 animate-fade-in-up opacity-100"
                  : "from-card/20 to-card/10 opacity-0"
              }`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 17, 94, 0.4), rgba(0, 17, 94, 0.2) 60%, transparent 80%)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-secondary font-medium">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
                    {exp.period}
                  </p>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                        i % 2 === 0
                          ? "bg-primary/15 text-primary border-primary/30 group-hover:bg-primary/25"
                          : "bg-accent/15 text-accent border-accent/30 group-hover:bg-accent/25"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
