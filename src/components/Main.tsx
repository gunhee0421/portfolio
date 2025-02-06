'use client'

import { Header } from './Header'
import { AboutSection } from './Section/AboutSection'
import IntroSection from './Section/IntroSection'
import ProjectSection from './Section/ProjectSection'
import SkillSection from './Section/SkillSection'
import { LeftNavigation } from './navigation'
import { useEffect, useRef, useState } from 'react'

const Main = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return

      // 프로젝트 섹션의 높이를 포함한 전체 높이 계산
      const projectSectionHeight = window.innerHeight * 3 // 3개의 프로젝트
      const totalHeight =
        mainRef.current.scrollHeight + projectSectionHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
      <main className="overflow-x-hidden scrollbar-hide">
        <div className="px-8 sm:px-[4rem] md:px-[4rem] scrollbar-hide lg:px-[5rem] xl:[7rem] 2xl:px-[15rem] bg-bgBlack">
          <div className="fixed right-[4dvw] bottom-0 xl:right-8 2xl:right-20 w-fit">
            <LeftNavigation />
          </div>
          <IntroSection />
          <AboutSection />
          <SkillSection />
        </div>
        <ProjectSection />
        <div
          id="contact"
          className="px-8 sm:px-[4rem] md:px-[4rem] scrollbar-hide lg:px-[5rem] xl:[7rem] 2xl:px-[15rem] bg-bgBlack"
        >
          <AboutSection />
        </div>
      </main>
    </div>
  )
}

export default Main
