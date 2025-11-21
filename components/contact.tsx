"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { SocialIcon } from "@/components/social-icon"
import ScrollWidget from "@/components/scroll-widget"

export default function Contact() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/jsuryakt", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/suryakumar", icon: "linkedin" },
    { label: "Twitter", href: "https://twitter.com/suryakumar", icon: "twitter" },
    { label: "Email", href: "mailto:hello@suryakumar.com", icon: "mail" },
  ]

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-border relative">
      <div className="absolute -top-24 -left-32 md:-left-40 lg:-left-48">
        <ScrollWidget />
      </div>

      <div
        className={`space-y-12 text-center ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
        style={{ animationDelay: "0.7s" }}
      >
        <div className="space-y-4">
          <p className="text-sm font-mono text-accent">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl font-bold">Let's work together</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to interesting projects and opportunities. Feel free to reach out if you'd like to
            collaborate!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="mailto:hello@suryakumar.com"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105 active:scale-95"
          >
            Send me an email
          </Link>
          <Link
            href="https://linkedin.com/in/suryakumar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border-2 border-accent text-accent font-medium hover:bg-accent/10 transition-all hover:scale-105 active:scale-95"
          >
            Connect on LinkedIn
          </Link>
        </div>

        <div className="pt-12 border-t border-border">
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-primary hover:scale-125 transition-all duration-300"
                aria-label={link.label}
              >
                <SocialIcon icon={link.icon} />
              </Link>
            ))}
          </div>
          <p className="text-muted-foreground text-sm">© 2025 Surya Kumar. Built with React & Next.js.</p>
        </div>
      </div>
    </section>
  )
}
