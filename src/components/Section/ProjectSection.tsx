import { motion, AnimatePresence } from 'framer-motion'
import GDG from '../Project/Gdg'
import Jinlo from '../Project/Jinlo'
import Ladi from '../Project/Ladi'
import React, { SetStateAction, useEffect, useRef } from 'react'

export const PROJECTS = [
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

const ProjectSection: React.FC<{
  currentIndex: number
  setCurrentIndex: React.Dispatch<SetStateAction<number>>
}> = ({ currentIndex, setCurrentIndex }) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInViewport = useRef(false)
  const isLocked = useRef(false)
  const isTransitioning = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.9) {
          section.scrollIntoView({ behavior: 'instant' })
          document.body.style.overflow = 'hidden'
          isInViewport.current = true
          isLocked.current = true
        }
      },
      {
        threshold: [0.9],
      },
    )

    const handleWheel = (e: WheelEvent) => {
      if (!isInViewport.current || isTransitioning.current) return
      e.preventDefault()
      e.stopPropagation()

      isTransitioning.current = true
      setTimeout(() => {
        isTransitioning.current = false
      }, 500)

      const dispatchScrollEvent = () => {
        const scrollEvent = new Event('scroll')
        window.dispatchEvent(scrollEvent)
      }

      if (currentIndex === 0 && e.deltaY < 0) {
        document.body.style.overflow = ''
        isInViewport.current = false
        isLocked.current = false
        return
      }

      if (currentIndex === PROJECTS.length - 1 && e.deltaY > 0) {
        document.body.style.overflow = ''
        isInViewport.current = false
        isLocked.current = false
        return
      }

      if (e.deltaY > 0 && currentIndex < PROJECTS.length - 1) {
        setCurrentIndex((prev) => prev + 1)
        dispatchScrollEvent()
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1)
        dispatchScrollEvent()
      }
    }

    observer.observe(section)
    window.addEventListener('wheel', handleWheel, {
      passive: false,
      capture: true,
    })

    return () => {
      observer.disconnect()
      window.removeEventListener('wheel', handleWheel, { capture: true })
      document.body.style.overflow = ''
    }
  }, [currentIndex, setCurrentIndex])

  useEffect(() => {
    console.log('projectSection: ', currentIndex)
  }, [currentIndex])

  return (
    <article id="project">
      <div
        className={`block px-8 sm:px-[4rem] md:px-[4rem] lg:hidden ${PROJECTS[0].color}`}
      >
        <section
          id={PROJECTS[0].id}
          className="h-screen py-[50px] sm:py-[12dvh] text-white"
        >
          <ProjectHeader />
          {PROJECTS[0].component}
        </section>
      </div>
      {PROJECTS.slice(1).map((project, idx) => (
        <div
          key={idx}
          id={project.id}
          className={`block px-8 sm:px-[4rem] md:px-[4rem] lg:hidden ${project.color}`}
        >
          <section className="h-screen py-[50px] sm:py-[12dvh] text-white">
            {project.component}
          </section>
        </div>
      ))}
      <div
        ref={sectionRef}
        className={`hidden lg:block h-screen ${PROJECTS[currentIndex].color} transition-colors duration-700`}
      >
        <div className="px-8 sm:px-[4rem] md:px-[4rem] lg:px-[5rem] xl:[7rem] 2xl:px-[15rem]">
          <section
            id={PROJECTS[currentIndex].id}
            className="h-screen py-[50px] sm:py-[12dvh]"
          >
            <div className="flex flex-col h-full w-full text-white">
              {currentIndex === 0 && <ProjectHeader />}
              <div className="flex-1 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-0"
                  >
                    {PROJECTS[currentIndex].component}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}

export default ProjectSection
