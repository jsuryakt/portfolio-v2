"use client"

import { useEffect, useState } from "react"

interface SkillCategory {
  category: string
  skills: string[]
}

export default function Skills() {
  const [mounted, setMounted] = useState(false)
  const [visibleCategories, setVisibleCategories] = useState<boolean[]>([false, false, false, false])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-category-index") || "0")
            setVisibleCategories((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    document.querySelectorAll("[data-skill-category]").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [mounted])

  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend",
      skills: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3/SCSS", "RxJS", "DevExtreme"],
    },
    {
      category: "Backend",
      skills: ["Java", "Spring Boot", "REST APIs", "gRPC", "WebSockets", "Django REST"],
    },
    {
      category: "Databases & DevOps",
      skills: ["PostgreSQL", "MySQL", "DB2", "Firebase", "AWS (S3, EC2)", "Docker", "Jenkins", "TeamCity"],
    },
    {
      category: "Testing & Tools",
      skills: ["JUnit", "Selenium", "Appium", "Git", "Gradle/Maven", "JIRA", "Postman", "WebRTC"],
    },
  ]

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
      <div className={`space-y-12 ${mounted ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
        <div className="space-y-2">
          <p className="text-sm font-mono text-secondary">SKILLS</p>
          <h2 className="text-3xl md:text-4xl font-bold">Technologies & Tools</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              data-skill-category
              data-category-index={index}
              className={`space-y-4 p-4 rounded-lg border border-border/30 transition-all duration-500 ${
                visibleCategories[index] ? "animate-fade-in-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <h3 className="text-lg font-bold text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all hover:scale-105 cursor-default ${
                      i % 3 === 0
                        ? "bg-primary/10 border-primary/30 text-primary hover:border-primary/60 hover:bg-primary/20"
                        : i % 3 === 1
                          ? "bg-secondary/10 border-secondary/30 text-secondary hover:border-secondary/60 hover:bg-secondary/20"
                          : "bg-accent/10 border-accent/30 text-accent hover:border-accent/60 hover:bg-accent/20"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
