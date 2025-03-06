'use client'

import React, { useState, useEffect } from 'react'
import { AlignJustify } from 'lucide-react'
import { motion, Variants } from 'framer-motion'

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}
const navVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}
const mobileNavVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.15 },
  },
}

const mobileItemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}
const navOption = [
  { id: 'profile', label: 'Profile', number: '01' },
  { id: 'about', label: 'About', number: '02' },
  { id: 'skill', label: 'Skill', number: '03' },
  { id: 'project', label: 'Projects', number: '04' },
  { id: 'more', label: 'More', number: '05' },
]

export const Header = () => {
  const [activeSection, setActiveSection] = useState('intro')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profile', 'intro', 'about', 'skill', 'project', 'more']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="flex flex-row min-w-full justify-between backdrop-blur-md items-center lg:pt-5 font-blackHanSans"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hover:cursor-pointer">
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="50"
            viewBox="0 0 200 100"
            fill="none"
          >
            <text
              x="50"
              y="60"
              fontFamily="Arial, Helvetica, sans-serif"
              fontSize="48"
              fill="white"
              fontWeight="bold"
            >
              <tspan fill="#39FF14">G</tspan>UN
            </text>
          </svg>
        </a>
      </div>
      <div className="lg:hidden pr-6 pt-1">
        {isOpen ? (
          <nav
            className="absolute top-0 left-0 w-[100dvw] h-[100dvh] bg-white overflow-hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.ul
              className="flex h-full flex-col items-center justify-around pr-8 font-bold lg:text-xl"
              variants={mobileNavVariants}
              initial="hidden"
              animate="visible"
            >
              {navOption.map(({ id, label, number }) => (
                <motion.li
                  key={id}
                  className="w-[20dvw] h-[20dvh]"
                  variants={mobileItemVariants}
                >
                  <a
                    href={`#${id}`}
                    className={`flex justify-center h-full items-center ${
                      activeSection === id ? 'text-black' : 'text-primary'
                    } hover:text-black transition-colors duration-500`}
                  >
                    <span>{number}. </span>
                    {label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        ) : (
          <AlignJustify
            size={25}
            color="white"
            className="hover:cursor-pointer size-3 sm:size-7"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
      <nav className="hidden lg:block pr-8">
        <motion.ul
          className="flex flex-row gap-5 pr-8 font-bold lg:text-xl"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {navOption.map(({ id, label, number }) => (
            <motion.li key={id} variants={itemVariants}>
              <a
                href={`#${id}`}
                className={`${
                  activeSection === id ? 'text-primary' : 'text-garyFont'
                } hover:text-primary transition-colors duration-500`}
              >
                <span>{number}. </span>
                {label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </motion.div>
  )
}
