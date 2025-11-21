"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"

interface Project {
  title: string
  description: string
  technologies: string[]
  image?: string
  youtubeId?: string
  link?: string
}

export default function Projects() {
  const [mounted, setMounted] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([false, false, false, false, false])
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleProjects((prev) => {
              if (prev[index]) return prev // Prevent re-animation if already visible
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    document.querySelectorAll("[data-project]").forEach((el) => observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [mounted])

  const projects: Project[] = [
    {
      title: "AI-Powered Test Creation",
      description:
        "Developed AI system allowing users to write test cases in natural language and convert them into scripts. Reduced production bundle size by 40% using gzip compression, tree-shaking, and lazy loading.",
      technologies: ["Angular 19", "TypeScript", "AI/ML", "Performance Optimization", "Java"],
      youtubeId: "oXkNQ1R51LU",
      link: "/projects",
    },
    {
      title: "Test Editor",
      description:
        "Built no-code test automation tool with menu functionality, auto-save persistence, and CRUD operations for workspaces. Features intuitive drag-and-drop interface.",
      technologies: ["Angular", "TypeScript", "RxJS", "State Management"],
      youtubeId: "rSP15a2ZF8E",
      link: "/projects",
    },
    {
      title: "Test Manager",
      description:
        "Collaborated on the development of Test Manager, which is responsible for saving Test Editor tests into workspaces, developing CRUD operations for workspaces. This system helps teams organize and manage their test cases efficiently across multiple projects.",
      technologies: ["Java", "Spring Boot", "gRPC", "REST APIs"],
      youtubeId: "W7NoU0Xa_HI",
      link: "/projects",
    },
    {
      title: "Test Manager Suites",
      description:
        "Test Manager Suites, a feature that allows users to create and manage test suites within the Test Manager. This feature enables users to group related tests together, making it easier to run and manage tests across different projects.",
      technologies: ["Java", "Spring Boot", "Angular", "REST APIs"],
      youtubeId: "NdlHGwTmcf0",
      link: "/projects",
    },
  ]

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
      <div className={`space-y-12 ${mounted ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.5s" }}>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-mono text-primary">PROJECTS</p>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Work</h2>
          </div>
          <Link
            href="/projects"
            className="text-sm text-primary hover:text-secondary transition-colors hidden md:block"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              data-project
              data-index={index}
              className={`group p-6 rounded-xl border border-border bg-card/50 transition-all duration-300 ${
                visibleProjects[index]
                  ? index % 2 === 0
                    ? "animate-slide-in-left"
                    : "animate-slide-in-right"
                  : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                backgroundImage:
                  "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 118, 33, 0.25) 0%, rgba(0, 118, 33, 0.08) 40%, transparent 80%)",
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = ((e.clientX - rect.left) / rect.width) * 100
                const y = ((e.clientY - rect.top) / rect.height) * 100
                e.currentTarget.style.setProperty("--mouse-x", `${x}%`)
                e.currentTarget.style.setProperty("--mouse-y", `${y}%`)
              }}
            >
              {project.youtubeId ? (
                <div className="w-full aspect-video rounded-lg mb-4 overflow-hidden bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${project.youtubeId}`}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              ) : project.image ? (
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              ) : (
                <div className="w-full h-40 bg-border/50 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Project Image</span>
                </div>
              )}

              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={tech}
                    className={`text-xs px-2 py-1 rounded-md border transition-all ${
                      i % 3 === 0
                        ? "bg-primary/10 text-primary border-primary/30 group-hover:bg-primary/20"
                        : i % 3 === 1
                          ? "bg-secondary/10 text-secondary border-secondary/30 group-hover:bg-secondary/20"
                          : "bg-accent/10 text-accent border-accent/30 group-hover:bg-accent/20"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/projects"
          className="block md:hidden text-center text-primary hover:text-secondary transition-colors"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  )
}
