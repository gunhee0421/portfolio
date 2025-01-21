'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const SkillComponent: React.FC<{
  image: string
  title: string
  percent: number
  className?: string
}> = ({ image, title, percent, className }) => {
  return (
    <li className={`flex flex-row items-center space-x-4 ${className}`}>
      <div className="flex flex-col items-center mr-6">
        <Image
          src={`/images/skill/${image}.png`}
          width={100}
          height={100}
          alt={`${title} image`}
        />
        <span className="mt-4 font-toss font-bold text-center">{title}</span>
      </div>

      <div className="relative w-60 h-8 bg-gray-800 shadow-md border-2 border-gray-700 overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 via-green-500 to-green-700 transition-all duration-500 ease-in-out"
          style={{ width: `${percent}%` }}
        ></div>

        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-10">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="h-full border-l border-gray-600 opacity-50"
            ></div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
      </div>

      <span className="text-lg font-bold text-green-400 shadow-sm">
        {percent}%
      </span>
    </li>
  )
}

export const SkillSection = () => {
  const [index, setIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  const handleIndexChange = (newIndex: number) => {
    if (index !== newIndex) {
      setIsFading(true)
      setTimeout(() => {
        setIndex(newIndex)
        setIsFading(false)
      }, 500)
    }
  }

  return (
    <section id="skill" className="h-screen py-60">
      <div className="flex flex-col h-full text-white">
        <h1 className="pb-20">
          <a
            href="#skill"
            className="text-grayFont text-4xl font-bold hover:text-primary transition-colors duration-500"
          >
            <span className="text-primary">02. </span>Skill
          </a>
        </h1>
        <div className="flex flex-row justify-between h-full">
          <nav className="w-[20%] flex flex-col items-start font-toss text-4xl font-semibold relative">
            <div
              className={`absolute left-0 w-1 h-[60px] bg-primary transition-transform duration-500`}
              style={{ transform: `translateY(${index * 60}px)` }}
            ></div>
            <div className="flex flex-col gap-6 items-start my-2">
              <button
                className={`${
                  index === 0 ? 'text-white' : 'text-grayFont'
                } pl-6 relative hover:cursor-pointer transition-colors duration-300`}
                onClick={() => handleIndexChange(0)}
              >
                Front End
              </button>
              <button
                className={`${
                  index === 1 ? 'text-white' : 'text-grayFont'
                } pl-6 relative hover:cursor-pointer transition-colors duration-300`}
                onClick={() => handleIndexChange(1)}
              >
                Back End
              </button>
            </div>
          </nav>

          <div className="w-[80%] text-4xl flex flex-col gap-12 relative">
            <div
              className={`w-full h-full transition-opacity duration-500 ${
                isFading ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {index === 0 ? (
                <div className="w-full h-full flex flex-col justify-between">
                  <ol className="flex flex-row gap-20">
                    <SkillComponent image="html" title="HTML" percent={70} />
                    <SkillComponent image="css" title="CSS" percent={80} />
                    <SkillComponent
                      image="js"
                      title="JavaScript"
                      percent={90}
                    />
                  </ol>
                  <ol className="flex flex-row gap-20">
                    <SkillComponent image="react" title="React" percent={90} />
                    <SkillComponent image="next" title="Next" percent={80} />
                  </ol>
                  <ol className="flex flex-row gap-20">
                    <SkillComponent
                      image="styled"
                      title="Styled-Component"
                      percent={80}
                    />
                    <SkillComponent
                      image="tailwind"
                      title="TailWind"
                      percent={90}
                    />
                  </ol>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col justify-between">
                  <ol className="flex flex-row gap-20">
                    <SkillComponent
                      image="spring"
                      title="Spring Boot"
                      percent={60}
                    />
                    <SkillComponent image="node" title="Node.js" percent={45} />
                    <SkillComponent
                      image="express"
                      title="Express"
                      percent={45}
                    />
                  </ol>
                  <ol className="flex flex-row gap-20">
                    <SkillComponent image="aws" title="AWS" percent={70} />
                    <SkillComponent
                      image="docker"
                      title="Docker"
                      percent={60}
                    />
                  </ol>
                  <ol className="flex flex-row gap-20">
                    <SkillComponent image="mysql" title="MySQL" percent={70} />
                    <SkillComponent
                      image="postgresql"
                      title="PostgreSQL"
                      percent={40}
                    />
                    <SkillComponent
                      image="prisma"
                      title="Prisma"
                      percent={45}
                    />
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SkillSection
