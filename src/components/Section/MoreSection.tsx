import Link from 'next/link'
import { useState } from 'react'

const MoreSection = () => {
  const [hover, setHover] = useState<string | null>(null)

  return (
    <div
      id="more"
      className="w-screen h-screen pt-[20dvh] flex flex-col gap-10 items-center justify-center relative"
    >
      <h1 className="relative text-6xl font-bold text-white text-center">
        끝까지 봐주셔서 감사합니다.
        <span className="absolute top-[-10rem] left-1/2 transform -translate-x-1/2 text-[10rem] text-black text-shadow-lg whitespace-nowrap">
          Thank You
        </span>
      </h1>
      <p className="text-center text-[#39FF10] font-medium">
        욕심을 숨기지 않고 끊임없이 도전하며, 나아가겠습니다.
        <br />
        항상 사용자 관점에서 고민하며, 스스로 사용했을때 만족스러운 서비스를
        만들겠습니다.
      </p>
      <div className="flex flex-row gap-4">
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
      </div>
    </div>
  )
}

export default MoreSection
