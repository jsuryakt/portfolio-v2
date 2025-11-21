"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [displayText, setDisplayText] = useState("Jayasurya")
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  const texts = ["Jayasurya", "Software Engineer", "Full Stack Developer"]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const currentText = texts[textIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const delay = isDeleting ? 0 : 3000

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1))
          } else {
            setIsDeleting(true)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? typingSpeed : displayText.length === currentText.length ? delay : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, textIndex])

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-screen z-0">
        <Image
          src="/hero.jpeg"
          alt="Hero background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      <section className="relative w-full px-6 py-24 md:py-16 overflow-hidden z-10">

      <div className="relative max-w-6xl mx-auto flex flex-col items-center justify-center text-center min-h-[60vh]">
        <div className={`space-y-6 ${mounted ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {displayText}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Crafting beautiful, performant web experiences with modern technologies
            </p>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            With 4+ years of experience, I specialize in building scalable frontend applications using Angular, React,
            and TypeScript. Passionate about AI integration, WebRTC, and creating seamless user experiences.
          </p>

          <div className="flex gap-4 pt-4 justify-center">
            <Link
              href="#contact"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all active:scale-95"
            >
              Let's work together
            </Link>
            <Link
              href="#projects"
              className="px-6 py-3 rounded-full border border-secondary text-secondary font-medium hover:bg-secondary/10 transition-colors"
            >
              View my work
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
