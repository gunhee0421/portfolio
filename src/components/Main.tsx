'use client'

import { Header } from './Header'
import { AboutSection } from './Section/AboutSection'
import IntroSection from './Section/IntroSection'
import ProjectSection, { PROJECTS } from './Section/ProjectSection'
import SkillSection from './Section/SkillSection'
import { LeftNavigation } from './navigation'
import { useEffect, useRef, useState } from 'react'

const Main = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return

      const projectHeight = window.innerHeight
      const projectSectionHeight = window.innerHeight * (PROJECTS.length - 1)
      const totalHeight =
        mainRef.current.scrollHeight + projectSectionHeight - window.innerHeight

      // 스크롤 위치와 현재 프로젝트 인덱스를 결합하여 계산
      const scrollPosition = window.scrollY + currentIndex * projectHeight
      const progress = (scrollPosition / totalHeight) * 100

      setScrollProgress(Math.min(progress, 100))
    }

    // 초기 스크롤 상태 설정
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentIndex]) // setCurrentIndex 제거

  useEffect(() => {
    console.log('main: ', currentIndex)
  }, [currentIndex])

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
        <ProjectSection
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
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
