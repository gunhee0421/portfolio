'use client'

import { Header } from './Header'
import { AboutSection } from './Section/AboutSection'
import IntroSection from './Section/IntroSection'
import ProfileSection from './Section/ProfileSection'
import ProjectSection from './Section/ProjectSection'
import SkillSection from './Section/SkillSection'
import { LeftNavigation } from './navigation'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import MoreSection from './Section/MoreSection'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const Main = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const mainRef = useRef<HTMLDivElement>(null)
  const [headerAnimationDone, setHeaderAnimationDone] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        const scrollTop = window.scrollY
        const scrollHeight = document.documentElement.scrollHeight
        const clientHeight = document.documentElement.clientHeight

        const totalHeight = scrollHeight - clientHeight

        const progress = (scrollTop / totalHeight) * 100
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="w-full min-h-screen scrollbar-hide" ref={mainRef}>
      <header className="fixed w-screen z-30">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          onAnimationComplete={() => setHeaderAnimationDone(true)}
        >
          <Header />
        </motion.div>
        <div className="h-0.5 bg-gray-200">
          <motion.div
            className="h-full bg-primary transition-all duration-200"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>
      <main className="overflow-x-hidden scrollbar-hide bg-bgBlack">
        <div className="fixed right-[4dvw] bottom-0 xl:right-8 2xl:right-20 w-fit">
          <LeftNavigation />
        </div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={headerAnimationDone ? 'visible' : 'hidden'}
        >
          {headerAnimationDone ? (
            <IntroSection />
          ) : (
            <div className="h-screen" />
          )}
        </motion.div>
        <ProfileSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <MoreSection />
      </main>
    </div>
  )
}

export default Main
