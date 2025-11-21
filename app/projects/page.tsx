"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"

interface Project {
  title: string
  description: string
  date: string
  type: string
  technologies: string[]
  image: string
  links: {
    live?: string
    source?: string
  }
}

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleProjects((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    document.querySelectorAll("[data-project]").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [mounted])

  const projects: Project[] = [
    {
      title: "Sai Karuna",
      description: "Enforcement & Seizure Agency Undertaking Sale of Bank Seized Properties",
      date: "Oct 2024",
      type: "Client Project",
      technologies: ["Angular", "TypeScript", "Spring Boot", "Java"],
      image: "/saikaruna.jpg",
      links: { live: "#" },
    },
    {
      title: "Ecardify",
      description:
        "Elevate your invite planning experience with ecardify, be it a wedding, birthday, anniversary, housewarming, or any other special occasion",
      date: "Feb 2024",
      type: "Client Project",
      technologies: ["Angular", "TypeScript", "Node.js", "Firebase"],
      image: "/ecardify.jpg",
      links: { live: "#" },
    },
    {
      title: "Fun With JS",
      description: "Having fun with HTML, CSS and JS by creating 30 different projects",
      date: "Mar 2023",
      type: "Personal Project",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "/js30.jpeg",
      links: { live: "#", source: "#" },
    },
    {
      title: "Fodome",
      description: "Mobile app to connect food donors with the needy",
      date: "Jul 2021",
      type: "Personal Project",
      technologies: ["Flutter", "Firebase", "Dart"],
      image: "/fodome.jpeg",
      links: { source: "#" },
    },
    {
      title: "VG Catering",
      description: "Client Project - A leading catering service platform in Bantwal/Mangaluru",
      date: "Jul 2021",
      type: "Client Project",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "/vgcatering.jpeg",
      links: { live: "#", source: "#" },
    },
    {
      title: "SJEC-CS Blogs",
      description: "Blog project for the Department of Computer Science, SJEC",
      date: "Dec 2020",
      type: "Academic Project",
      technologies: ["Django", "Python", "HTML", "CSS", "Bootstrap"],
      image: "/csblogs.png",
      links: { live: "#", source: "#" },
    },
    {
      title: "Notes App",
      description:
        "Notes Application lets you store notes online. Store passwords, grocery lists, daily routines, or speeches you're preparing for",
      date: "Oct 2020",
      type: "Personal Project",
      technologies: ["React", "JavaScript", "Firebase", "HTML/CSS"],
      image: "/notes.png",
      links: { live: "#", source: "#" },
    },
    {
      title: "Save Battery",
      description:
        "Notify users about battery when it exceeds certain limit to save power and increase battery life cycle",
      date: "Aug 2020",
      type: "Personal Project",
      technologies: ["JavaScript", "Web APIs", "HTML/CSS"],
      image: "/battery.png",
      links: { source: "#" },
    },
    {
      title: "iCafe Cyber System",
      description:
        "Cyber Management system for managing systems in a cyber cafe with user registration and payment processing",
      date: "Sep 2019",
      type: "Academic Project",
      technologies: ["Java", "Spring Boot", "MySQL", "HTML/CSS"],
      image: "/cafe.png",
      links: { source: "#" },
    },
    {
      title: "Lift Simulation",
      description: "Basic Simulation of a lift, onboarding task at RealDevSquad",
      date: "Jan 2024",
      type: "Open Source",
      technologies: ["JavaScript", "React", "TypeScript"],
      image: "/lift.png",
      links: { live: "#", source: "#" },
    },
  ]

  const neogCampProjects: Project[] = [
    {
      title: "Minimal Store",
      description: "A simple and elegant online store template made using minimal-ui.",
      date: "Feb 2022",
      type: "Learning Project",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/minimal-store.jpeg",
      links: { live: "#", source: "#" },
    },
    {
      title: "Minimal UI",
      description: "A CSS component library for building minimalistic web applications.",
      date: "Jan 2022",
      type: "Learning Project",
      technologies: ["CSS", "HTML", "JavaScript"],
      image: "/minimal-ui.jpeg",
      links: { live: "#", source: "#" },
    },
    {
      title: "Stonks Profit or Loss",
      description:
        "Want to know your profits in the stock market? This website helps users know profit/loss in percentage & absolute value.",
      date: "Sep 2021",
      type: "Learning Project",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/mark1.png",
      links: { live: "#", source: "#" },
    },
    {
      title: "Fun With Birthdays",
      description:
        "Checks if your birthdate is a palindrome, shows days alive, days till next birthday, and lifespan in hours/minutes/seconds.",
      date: "Sep 2021",
      type: "Learning Project",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/mark2.png",
      links: { live: "#", source: "#" },
    },
    {
      title: "Learn Triangles",
      description: "A website that helps you learn about triangles with interactive examples.",
      date: "Sep 2021",
      type: "Learning Project",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/mark3.png",
      links: { live: "#", source: "#" },
    },
    {
      title: "Is Your Birthday Lucky?",
      description: "A website to check whether your birthday is lucky or not.",
      date: "Sep 2021",
      type: "Learning Project",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/mark4.png",
      links: { live: "#", source: "#" },
    },
    {
      title: "Paisa Register Manager",
      description: "A cash register manager that tells you how to return change with the minimum number of notes.",
      date: "Sep 2021",
      type: "Learning Project",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/mark5.png",
      links: { live: "#", source: "#" },
    },
    {
      title: "College Rank",
      description:
        "Shows top 10 colleges for engineering, medical, architecture and overall according to NIRF rankings.",
      date: "Sep 2021",
      type: "Learning Project",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/mark6.png",
      links: { live: "#", source: "#" },
    },
    {
      title: "Moji Interpret",
      description: "A library of emojis with meanings to help understand what different emojis represent.",
      date: "Sep 2021",
      type: "Learning Project",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/mark7.png",
      links: { live: "#", source: "#" },
    },
    {
      title: "Addmoji",
      description: "A text transformer to add emojis to your text and make it more flavorful.",
      date: "Sep 2021",
      type: "Learning Project",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/mark8.png",
      links: { live: "#", source: "#" },
    },
    {
      title: "Minion Translator",
      description: "A translator to understand minion language - 'bababa babanana' and more!",
      date: "Sep 2021",
      type: "Learning Project",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/mark9.png",
      links: { live: "#", source: "#" },
    },
    {
      title: "My Portfolio",
      description: "Personal portfolio hosted on a custom domain from the earlier learning phase.",
      date: "Sep 2021",
      type: "Learning Project",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/mark10.png",
      links: { live: "#", source: "#" },
    },
    {
      title: "Let's Test Your Knowledge on Python",
      description: "A CLI app that tests if you know Python. Built with JavaScript and embedded REPL.",
      date: "Sep 2021",
      type: "Learning Project",
      technologies: ["JavaScript", "CLI"],
      image: "/mark11.png",
      links: { live: "#", source: "#" },
    },
    {
      title: "Do You Know Jayasurya?",
      description: "A CLI app that checks if you know about me. Built with JavaScript using CHALK library.",
      date: "Sep 2021",
      type: "Learning Project",
      technologies: ["JavaScript", "CLI"],
      image: "/mark12.png",
      links: { live: "#", source: "#" },
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="relative pt-20 pb-20">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className={`space-y-4 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
            <p className="text-sm font-mono text-primary">ALL PROJECTS</p>
            <h1 className="text-4xl md:text-5xl font-bold">My Work & Creations</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of client projects, personal experiments, and open-source contributions spanning frontend
              development, full-stack applications, and mobile development.
            </p>
          </div>
        </section>

        {/* Main Projects Grid */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="text-2xl font-bold mb-8">Professional & Personal Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                data-project
                data-index={index}
                className={`group p-6 rounded-xl border border-border bg-card/50 transition-all duration-300 ${
                  visibleProjects[index] ? "animate-fade-in-up" : "opacity-0"
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
                {/* Project Image Placeholder */}
                {project.image && (
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                {!project.image && (
                  <div className="w-full h-48 bg-border/50 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Project Image</span>
                  </div>
                )}

                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{project.date}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/30">
                    {project.type}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
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

                <div className="flex gap-3 pt-4 border-t border-border/50">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      className="text-sm text-primary hover:text-secondary transition-colors"
                    >
                      Live Demo →
                    </a>
                  )}
                  {project.links.source && (
                    <a
                      href={project.links.source}
                      className="text-sm text-primary hover:text-secondary transition-colors"
                    >
                      View Source →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Naan Academy (neog.camp) Learning Projects */}
        <section className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Naan Academy (neog.camp) Learning Projects</h2>
          <p className="text-muted-foreground mb-8">
            Projects from my learning journey at Naan Academy, building foundational skills in web development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neogCampProjects.map((project, index) => (
              <div
                key={index}
                data-project
                data-index={projects.length + index}
                className={`group p-6 rounded-xl border border-border bg-card/50 transition-all duration-300 ${
                  visibleProjects[projects.length + index] ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 0.08}s`,
                  backgroundImage:
                    "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 118, 33, 0.2) 0%, rgba(0, 118, 33, 0.05) 40%, transparent 80%)",
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = ((e.clientX - rect.left) / rect.width) * 100
                  const y = ((e.clientY - rect.top) / rect.height) * 100
                  e.currentTarget.style.setProperty("--mouse-x", `${x}%`)
                  e.currentTarget.style.setProperty("--mouse-y", `${y}%`)
                }}
              >
                {/* Project Image Placeholder */}
                {project.image && (
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                )}
                {!project.image && (
                  <div className="w-full h-40 bg-border/50 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground text-xs">Project Image</span>
                  </div>
                )}

                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{project.date}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
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

                <div className="flex gap-3 pt-4 border-t border-border/50">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      className="text-sm text-primary hover:text-secondary transition-colors"
                    >
                      Live →
                    </a>
                  )}
                  {project.links.source && (
                    <a
                      href={project.links.source}
                      className="text-sm text-primary hover:text-secondary transition-colors"
                    >
                      Source →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
