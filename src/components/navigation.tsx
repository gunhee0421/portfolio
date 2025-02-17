'use client'

import { useEffect, useState } from 'react'

export const LeftNavigation = () => {
  const [link, setLink] = useState('https://github.com/gunhee0421')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (
        scrollY >= window.innerHeight * 3 &&
        scrollY < window.innerHeight * 4
      ) {
        setLink('https://github.com/gunhee0421/Jjinro')
      } else if (
        scrollY >= window.innerHeight * 4 &&
        scrollY < window.innerHeight * 5
      ) {
        setLink(
          'https://github.com/GDG-on-Campus-Kangnam-University/GDG-Planner-Camp-Web',
        )
      } else if (
        scrollY >= window.innerHeight * 5 &&
        scrollY < window.innerHeight * 6
      ) {
        setLink('https://github.com/gunhee0421/life-designer-web')
      } else {
        setLink('https://github.com/gunhee0421')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="flex flex-col gap-12 justify-center items-center">
      <a
        className="hover:text-primary transition-all duration-500 translate-y-4 hover:translate-y-0 text-white"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          fill="currentColor"
          className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
        >
          <path d="M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
        </svg>
      </a>
      <div className="h-18 md:h-[10dvh] xl:h-56 w-[1px] bg-garyFont" />
    </div>
  )
}
