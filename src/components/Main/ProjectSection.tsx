import GDG from '../Projects/Gdg'
import Jinlo from '../Projects/Jinlo'
import Ladi from '../Projects/Ladi'
import { useEffect, useRef, useState } from 'react'

const PROJECTS = [
  { component: <Jinlo />, color: 'bg-[#00C369]', id: 'jinlo' },
  { component: <GDG />, color: 'bg-[#9097C0]', id: 'gdg' },
  { component: <Ladi />, color: 'bg-[#1666DB]', id: 'ladi' },
]

const ProjectHeader = () => (
  <div className="flex flex-row justify-between">
    <h1 className="md:pb-3 xl:pb-5 2xl:pb-10">
      <a
        href="#project"
        className="text-white md:text-2xl xl:text-3xl 2xl:text-4xl font-bold hover:text-primary transition-colors duration-500"
      >
        <span className="text-primary">03. </span>Projects
      </a>
    </h1>
  </div>
)

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInViewport = useRef(false)
  const isLocked = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const rect = entry.boundingClientRect
        const isAtTop = rect.top <= 0

        if (entry.isIntersecting && isAtTop) {
          isInViewport.current = true
          isLocked.current = true
          document.body.style.overflow = 'hidden'
        } else if (!entry.isIntersecting && rect.top > 0) {
          isInViewport.current = false
          isLocked.current = false
          document.body.style.overflow = ''
        }

        const progressEvent = new CustomEvent('projectProgress', {
          detail: { isInView: entry.isIntersecting, currentIndex },
        })
        window.dispatchEvent(progressEvent)
      },
      { threshold: [0, 1] },
    )

    const handleWheel = (e: WheelEvent) => {
      if (!isInViewport.current) return

      if (currentIndex === 0 && e.deltaY < 0) {
        isLocked.current = false
        document.body.style.overflow = ''
        return
      }

      if (isLocked.current) {
        e.preventDefault()
        if (e.deltaY > 0 && currentIndex < PROJECTS.length - 1) {
          setCurrentIndex((prev) => prev + 1)
        } else if (e.deltaY < 0 && currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1)
        }

        const progressEvent = new CustomEvent('projectProgress', {
          detail: { isInView: true, currentIndex },
        })
        window.dispatchEvent(progressEvent)
      }
    }

    observer.observe(section)
    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      observer.disconnect()
      window.removeEventListener('wheel', handleWheel)
      document.body.style.overflow = ''
    }
  }, [currentIndex])

  return (
    <div
      ref={sectionRef}
      className={`${PROJECTS[currentIndex].color} px-8 sm:px-[4rem] md:px-[4rem] lg:px-[5rem] xl:[7rem] 2xl:px-[15rem] transition-colors duration-500`}
    >
      <section id="project" className="h-screen py-[50px] sm:py-[12dvh]">
        <div className="flex flex-col h-full w-full text-white">
          <ProjectHeader />
          {PROJECTS[currentIndex].component}
        </div>
      </section>
    </div>
  )
}

export default ProjectSection
