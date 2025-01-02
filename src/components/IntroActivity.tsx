'use client'

import React, { useEffect, useRef, useState } from 'react'

const IntroActivity = ({
  setSection,
}: {
  setSection: React.Dispatch<React.SetStateAction<number>>
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isCircleComplete, setIsCircleComplete] = useState(false)
  const [particleSpeed, setParticleSpeed] = useState(10)
  const [particleSize, setParticleSize] = useState(2)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const updateScreenState = () => {
      const width = window.innerWidth

      if (width <= 768) {
        setParticleSpeed(1)
        setParticleSize(1)
      } else {
        setParticleSpeed(4)
        setParticleSize(2)
      }

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    updateScreenState()
    window.addEventListener('resize', updateScreenState)

    const particles: Particle[] = []
    const particleCount = 360
    const animationDuration = 2000
    const radius = canvas.width / 4
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const timeElapsed = 0
    let hasCompletedCircle = false

    class Particle {
      x: number
      y: number
      radius: number
      speedX: number
      speedY: number
      opacity: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.radius = Math.random() * particleSize + 1
        this.speedX = (Math.random() - 0.5) * particleSpeed
        this.speedY = (Math.random() - 0.5) * particleSpeed
        this.opacity = 1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.opacity -= 0.01
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.fill()
        ctx.closePath()
      }
    }

    function initParticles(deltaTime: number) {
      if (hasCompletedCircle) return

      const angleStep = (Math.PI * 2) / particleCount
      const progress = (deltaTime / animationDuration) * particleCount

      for (let i = 0; i < progress; i++) {
        const angle = i * angleStep - Math.PI / 2
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        if (!particles.some((p) => p.x === x && p.y === y)) {
          particles.push(new Particle(x, y))
        }
      }
      if (progress >= particleCount) {
        hasCompletedCircle = true
        setIsCircleComplete(true)

        particles.forEach((particle) => {
          particle.speedX = (Math.random() - 0.5) * particleSpeed
          particle.speedY = (Math.random() - 0.5) * particleSpeed
        })

        // 애니메이션 종료 후 3초 후에 페이지를 전환
        setTimeout(() => {
          setSection(1)
        }, 3000)
      }
    }

    function animate(deltaTime: number) {
      if (canvas) {
        ctx?.clearRect(0, 0, canvas.width, canvas.height)
      }

      initParticles(deltaTime)

      particles.forEach((particle, index) => {
        if (particle.opacity <= 0) {
          particles.splice(index, 1)
        } else {
          particle.update()
          particle.draw()
        }
      })

      if (deltaTime < animationDuration) {
        requestAnimationFrame((time) => animate(time))
      } else {
        particles.forEach((particle) => {
          particle.speedX = (Math.random() - 0.5) * particleSpeed
          particle.speedY = (Math.random() - 0.5) * particleSpeed
        })
        requestAnimationFrame(() => animate(deltaTime + 1))
      }
    }

    requestAnimationFrame((time) => animate(time - timeElapsed))

    return () => {
      window.removeEventListener('resize', updateScreenState)
    }
  }, [particleSpeed, particleSize, setSection])

  return (
    <div className="relative w-full h-screen">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="flex items-center justify-center h-full">
        <h1
          className={`lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold text-white transition-transform duration-500 ${
            isCircleComplete ? 'scale-150' : ''
          }`}
        >
          Hello! Everyone!!!
        </h1>
      </div>
    </div>
  )
}

export default IntroActivity
