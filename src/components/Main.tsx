'use client'

import { Header } from './Header'
import { AboutSection } from './Section/AboutSection'
import IntroSection from './Section/IntroSection'
import ProfileSection from './Section/ProfileSection'
import ProjectSection from './Section/ProjectSection'
import SkillSection from './Section/SkillSection'
import { LeftNavigation } from './navigation'
import { useEffect, useRef, useState } from 'react'

const Main = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const mainRef = useRef<HTMLDivElement>(null)

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
        <Header />
        <div className="h-0.5 bg-gray-200">
          <div
            className="h-full bg-primary transition-all duration-200"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>
      <main className="overflow-x-hidden scrollbar-hide bg-bgBlack">
        <IntroSection />
        <ProfileSection />
        <AboutSection />
        <SkillSection />
        <div className="fixed right-[4dvw] bottom-0 xl:right-8 2xl:right-20 w-fit">
          <LeftNavigation />
        </div>
        <ProjectSection />
      </main>
    </div>
  )
}

export default Main
