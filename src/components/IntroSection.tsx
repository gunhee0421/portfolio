import { useEffect, useState } from 'react'
import styles from '@/css/IntroSection.module.css'

const IntroSection = () => {
  const sentences = [
    '안녕하세요.',
    '저는 일단 도전하고 시도하는 개발자',
    '프론트엔드 개발자 조건희 입니다.',
  ]
  const typingSpeed = 100

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showRestartButton, setShowRestartButton] = useState(false)

  const startTyping = () => {
    setShowRestartButton(false)
    setCurrentSentenceIndex(0)
    setDisplayText('')
    setIsTyping(true)
  }

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
        if (currentSentenceIndex === sentences.length - 1) {
          setIsTyping(false)
          setShowRestartButton(true)
        } else {
          setDisplayText('')
          setCurrentSentenceIndex(currentSentenceIndex + 1)
        }
      }
    }
    type()
  }, [currentSentenceIndex, isTyping])

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-6xl font-bold mb-5">
        <span className={styles.typing_effect}>{displayText}</span>
      </h1>
      <button
        onClick={startTyping}
        className={`absolute bottom-[35vh] px-6 py-3 bg-zinc-50 text-black hover:bg-primary font-semibold rounded-lg hover:bg-primary-dark transition duration-300 ${
          showRestartButton ? 'block' : 'hidden'
        }`}
      >
        다시 보기
      </button>
    </div>
  )
}

export default IntroSection
