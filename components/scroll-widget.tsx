"use client"

import { useEffect, useRef } from "react"

export default function ScrollWidget() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const lastScrollRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const size = 300
    canvas.width = size
    canvas.height = size

    const centerX = size / 2
    const centerY = size / 2
    const radius = 100

    const drawTextAlongCircle = (text: string, radius: number, offset = 0) => {
      const x = centerX
      const y = centerY
      const angleSlice = (Math.PI * 2) / (text.length * 2.2)

      ctx.font = "14px Geist"
      ctx.fillStyle = "rgba(79, 152, 195, 0.8)"
      ctx.textBaseline = "middle"
      ctx.textAlign = "center"

      for (let i = 0; i < text.length; i++) {
        const char = text[i]
        const angle = angleSlice * i + offset

        ctx.save()
        ctx.translate(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius)
        ctx.rotate(angle + Math.PI / 2)
        ctx.fillText(char, 0, 0)
        ctx.restore()
      }
    }

    const drawCanvas = (scrolled: number) => {
      const rotation = scrolled * 0.01

      ctx.clearRect(0, 0, size, size)

      const text = "jsuryakt is open to work, connect • "
      drawTextAlongCircle(text, radius, rotation)
      drawTextAlongCircle(text, radius, rotation + Math.PI)

      ctx.fillStyle = "rgba(79, 152, 195, 1)"
      ctx.beginPath()
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2)
      ctx.fill()
    }

    const handleScroll = () => {
      const scrolled = window.scrollY

      // Only redraw if scroll has changed significantly
      if (Math.abs(scrolled - lastScrollRef.current) < 1) return

      lastScrollRef.current = scrolled
      drawCanvas(scrolled)

      // Clear any pending timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }

    drawCanvas(0)
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-16 md:py-24">
      <canvas
        ref={canvasRef}
        className="w-64 h-64 md:w-80 md:h-80"
        style={{ filter: "drop-shadow(0 0 20px rgba(79, 152, 195, 0.2))" }}
      />
    </div>
  )
}
