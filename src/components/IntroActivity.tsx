'use client'

import { useEffect, useRef, useState } from 'react'

const IntroActivity = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isCircleComplete, setIsCircleComplete] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 360
    const animationDuration = 3000
    const radius = canvas.width / 4
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const timeElapsed = 0
    let hasCompletedCircle = false

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    })

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
        this.radius = Math.random() * 2 + 1
        this.speedX = (Math.random() - 0.5) * 4
        this.speedY = (Math.random() - 0.5) * 4
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

      const angleStep = (Math.PI * 2) / particleCount // 입자 간격 (360도 기준)
      const progress = (deltaTime / animationDuration) * particleCount // 현재 진행도

      for (let i = 0; i < progress; i++) {
        const angle = i * angleStep - Math.PI / 2
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        // 중복 방지
        if (!particles.some((p) => p.x === x && p.y === y)) {
          particles.push(new Particle(x, y))
        }
      }
      if (progress >= particleCount) {
        hasCompletedCircle = true
        setIsCircleComplete(true) // 글자 확대 상태 업데이트

        particles.forEach((particle) => {
          particle.speedX = (Math.random() - 0.5) * 10
          particle.speedY = (Math.random() - 0.5) * 10
        })
      }
    }

    function animate(deltaTime: number) {
      ctx?.clearRect(0, 0, canvas.width, canvas.height)

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
          particle.speedX = (Math.random() - 0.5) * 10
          particle.speedY = (Math.random() - 0.5) * 10
        })
        requestAnimationFrame(() => animate(deltaTime + 1)) // 퍼지는 애니메이션 유지
      }
    }

    requestAnimationFrame((time) => animate(time - timeElapsed))

    return () => {
      window.removeEventListener('resize', () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      })
    }
  }, [])

  return (
    <div className="relative w-full h-screen bg-black">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="flex items-center justify-center h-full">
        <h1
          className={`text-6xl font-bold text-white transition-transform duration-500 ${
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
