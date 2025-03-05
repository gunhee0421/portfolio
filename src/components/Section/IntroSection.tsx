'use client'

import { useEffect, useState } from 'react'
import { ChevronsDown } from 'lucide-react'
import styles from '@/css/IntroSection.module.css'

const IntroSection = () => {
  const sentences = [
    '안녕하세요.',
    '저는 일단 도전하고\n시도하는 개발자',
    '프론트엔드 개발자\n조건희 입니다.',
  ]
  const typingSpeed = 100
  const delayAfterTyping = 500

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showRestartButton, setShowRestartButton] = useState(false)
  const [isScrollEnabled, setIsScrollEnabled] = useState(false)

  useEffect(() => {
    if (!isTyping) return

    const fullText = sentences[currentSentenceIndex]
    let index = 0

    const type = () => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
        setTimeout(type, typingSpeed)
      } else {
        setTimeout(() => {
          if (currentSentenceIndex === sentences.length - 1) {
            setIsTyping(false)
            setShowRestartButton(true)
            setIsScrollEnabled(true) // 타이핑이 끝나면 스크롤 활성화
          } else {
            setDisplayText('')
            setCurrentSentenceIndex(currentSentenceIndex + 1)
          }
        }, delayAfterTyping)
      }
    }
    type()
  }, [currentSentenceIndex, isTyping])

  useEffect(() => {
    if (!isScrollEnabled) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isScrollEnabled])

  const getLinesWithEffect = (text: string) => {
    const lines = text.split('\n')
    return lines.map((line, index) => (
      <span
        key={index}
        className={`${index === lines.length - 1 ? styles.typing_effect : undefined}`}
        style={{ lineHeight: '1.5', letterSpacing: '0.1em' }}
      >
        {line}
        <br />
      </span>
    ))
  }

  return (
    <div className="px-8 sm:px-[4rem] md:px-[4rem] scrollbar-hide lg:px-[5rem] xl:[7rem] 2xl:px-[15rem]">
      <section className="w-full h-screen flex flex-col items-center justify-center">
        <h1 className="text-white sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-5 text-center font-toss">
          {getLinesWithEffect(displayText)}
        </h1>
        <button
          onClick={() => {
            setCurrentSentenceIndex(0)
            setDisplayText('')
            setIsTyping(true)
            setShowRestartButton(false)
            setIsScrollEnabled(false) // 다시 시작할 때 스크롤 비활성화
          }}
          className={`text-[8px] sm:text-sm md:text-lg px-2 py-1 rounded-sm lg:px-6 lg:py-3 bg-zinc-50 text-black hover:bg-primary font-bold lg:rounded-lg hover:bg-primary-dark transition duration-300  ${
            showRestartButton ? 'opacity-100' : 'opacity-0'
          }`}
        >
          다시 보기
        </button>
        <a
          href="#profile"
          className={`${showRestartButton ? 'opacity-100' : 'opacity-0'} transition duration-300 absolute bottom-[10vh]`}
        >
          <ChevronsDown
            size={80}
            className="text-white animate-bounce hidden lg:block"
          />
          <ChevronsDown
            size={25}
            className="text-white animate-bounce sm:hidden"
          />
          <ChevronsDown
            size={40}
            className="text-white animate-bounce hidden sm:block md:hidden"
          />
          <ChevronsDown
            size={60}
            className="text-white animate-bounce hidden md:block lg:hidden"
          />
        </a>
      </section>
    </div>
  )
}

export default IntroSection
