import Link from 'next/link'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const MoreSection = () => {
  const [hover, setHover] = useState<string | null>(null)
  const moreRef = useRef(null)
  const isInView = useInView(moreRef, { once: true, margin: '-0px 0px' })

  return (
    <div
      id="more"
      ref={moreRef}
      className="w-screen h-screen pt-[20dvh] flex flex-col gap-10 items-center justify-center relative"
    >
      <motion.h1
        className="relative text-6xl font-bold text-white text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.span
          className="absolute top-[-10rem] left-1/2 transform -translate-x-1/2 text-[10rem] text-black text-shadow-lg whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          Thank You
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          끝까지 봐주셔서 감사합니다.
        </motion.p>
      </motion.h1>
      <motion.p
        className="text-center text-[#39FF10] font-medium"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1 }}
      >
        욕심을 숨기지 않고 끊임없이 도전하며, 나아가겠습니다.
        <br />
        항상 사용자 관점에서 고민하며, 스스로 사용했을때 만족스러운 서비스를
        만들겠습니다.
      </motion.p>
      <motion.div
        className="flex flex-row gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 2 }}
      >
        <Link href={'mailto:rjsgml771@naver.com'}>
          <button className="mt-8 px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition">
            Send Email
          </button>
        </Link>
        <Link
          href={
            'https://docs.google.com/forms/d/e/1FAIpQLSeYHmNY8_ryA1O12j95B8pcFXNinxn24W-QQrN1y37skgx19g/viewform?usp=dialog'
          }
          target="_blank"
        >
          <button
            className="mt-8 px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition"
            onMouseEnter={() => setHover('hover')}
            onMouseLeave={() => setHover(null)}
          >
            {hover ? '피드백 감사합니다.' : 'Send Message'}
          </button>
        </Link>
      </motion.div>
    </div>
  )
}

export default MoreSection
