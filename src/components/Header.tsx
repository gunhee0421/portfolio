'use client'

import { useState } from 'react'
import { AlignJustify } from 'lucide-react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-row min-w-full justify-between backdrop-blur-md items-center lg:pt-5">
      <div className="hover:cursor-pointer">
        <a>
          <div className="sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="25"
              viewBox="0 0 100 50"
              fill="none"
            >
              <rect width="100" height="50" fill="000000D9" />
              <text
                x="25"
                y="35"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="24"
                fill="white"
                fontWeight="bold"
              >
                <tspan fill="#39FF14">G</tspan>UN
              </text>
            </svg>
          </div>
          <div className="hidden sm:block lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="50"
              viewBox="0 0 100 50"
              fill="none"
            >
              <rect width="100" height="50" fill="000000D9" />
              <text
                x="25"
                y="35"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="24"
                fill="white"
                fontWeight="bold"
              >
                <tspan fill="#39FF14">G</tspan>UN
              </text>
            </svg>
          </div>
          <div className="lg:block hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="100"
              viewBox="0 0 200 100"
              fill="none"
            >
              <rect width="200" height="100" fill="000000D9" />
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
          </div>
        </a>
      </div>
      <div className="lg:hidden pr-6 pt-1">
        {isOpen ? (
          <nav
            className={`absolute top-0 left-0 w-[100dvw] h-[100dvh] bg-white overflow-hidden`}
          >
            <ul
              className="flex h-full flex-col items-center justify-around pr-8 font-bold lg:text-xl"
              onClick={() => setIsOpen(false)}
            >
              <li className="w-[20dvw] h-[20dvh]">
                <a
                  href="#about"
                  className="flex justify-center h-full items-center text-primary hover:text-black transition-colors duration-500"
                >
                  <span className="text-black">01. </span>About
                </a>
              </li>
              <li className="w-[20dvw] h-[20dvh]">
                <a
                  href="#about"
                  className="flex justify-center h-full items-center text-primary hover:text-black transition-colors duration-500"
                >
                  <span className="text-black">02. </span>Skills
                </a>
              </li>
              <li className="w-[20dvw] h-[20dvh]">
                <a
                  href="#about"
                  className="flex justify-center h-full items-center text-primary hover:text-black transition-colors duration-500"
                >
                  <span className="text-black">03. </span>Projects
                </a>
              </li>
              <li className="w-[20dvw] h-[20dvh]">
                <a
                  href="#about"
                  className="flex justify-center h-full items-center text-primary hover:text-black transition-colors duration-500"
                >
                  <span className="text-black">04. </span>Contact
                </a>
              </li>
              <li className="w-[20dvw] h-[20dvh]">
                <a
                  href="#about"
                  className="flex justify-center h-full items-center text-primary hover:text-black transition-colors duration-500"
                >
                  <span className="text-black">05. </span>More
                </a>
              </li>
            </ul>
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
      <nav className="hidden lg:block">
        <ul className="flex flex-row gap-5 pr-8 font-bold lg:text-xl">
          <li>
            <a
              href="#about"
              className="text-garyFont hover:text-primary transition-colors duration-500"
            >
              <span className="text-primary">01. </span>About
            </a>
          </li>
          <li>
            <a
              href="#skill"
              className="text-garyFont hover:text-primary transition-colors duration-500"
            >
              <span className="text-primary">02. </span>Skill
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="text-garyFont hover:text-primary transition-colors duration-500"
            >
              <span className="text-primary">03. </span>Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-garyFont hover:text-primary transition-colors duration-500"
            >
              <span className="text-primary">04. </span>Contact
            </a>
          </li>
          <li>
            <a
              href="#more"
              className="text-garyFont hover:text-primary transition-colors duration-500"
            >
              <span className="text-primary">05. </span>More
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
