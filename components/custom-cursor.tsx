"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      const target = e.target as HTMLElement
      setIsPointer(window.getComputedStyle(target).cursor === "pointer")
    }

    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [])

  const size = 20

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-150 ease-out"
      style={{
        transform: `translate(${position.x - size / 2}px, ${position.y - size / 2}px)`
      }}
    >
      <div
        className={`rounded-full border border-primary transition-all duration-200
        ${isPointer ? "scale-150 bg-primary/20" : "bg-primary/10"}`}
        style={{ width: size, height: size }}
      />
    </div>
  )
}