'use client'

import React, { useState } from 'react'

const WebDesign: React.FC<{
  visible: number
  setVisible: React.Dispatch<React.SetStateAction<number>>
}> = ({ visible, setVisible }) => {
  return (
    <div className="hidden sm:flex flex-row justify-between h-full">
      <div className="w-[40%] relative group pr-4">
        <h1 className="md:pb-6 xl:pb-10 2xl:pb-20">
          <a
            href="#about"
            className="text-white md:text-2xl xl:text-3xl 2xl:text-4xl font-bold hover:text-primary transition-colors duration-500"
          >
            <span className="text-primary">01. </span>About
          </a>
        </h1>
        <div
          className={`flex justify-center items-center transition-opacity duration-700 w-[80%] h-[80%]`}
        >
          {visible === 1 && (
            <iframe
              src="https://giphy.com/embed/SOb4AcaDitenU4XKdC"
              className={`w-full h-[70%] giphy-embed ${visible === 1 ? 'opacity-1' : 'opacity-0'}`}
              allowFullScreen
            ></iframe>
          )}
          {visible === 2 && (
            <iframe
              src="https://giphy.com/embed/He4wudo59enf2"
              className={`w-full h-[70%] giphy-embed ${visible === 2 ? 'opacity-1' : 'opacity-0'}`}
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
      <div
        className={`w-[60%] font-notoSans md:text-[2dvw] xl:text-3xl 2xl:text-4xl flex flex-col items-center justify-center transition-all duration-500 ${
          visible > 0 ? 'text-[#696969]' : 'text-white'
        }`}
      >
        <p
          style={{ lineHeight: '1.5' }}
          className="transition-opacity duration-500"
        >
          <strong
            className={`relative inline-block font-bold border-b border-gray-500 before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-0 before:bg-white before:origin-left before:transition-all before:duration-500 hover:before:w-full ${
              visible === 1 && 'text-white'
            }`}
            onMouseEnter={() => setVisible(1)}
            onMouseLeave={() => setVisible(0)}
          >
            상상한 무궁무진한 아이디어를
          </strong>{' '}
          제가 배운 기술로 구현해가는 과정이 재밌습니다. 항상 새로운 방향으로
          도전해보는 프론트엔드 개발자가 되겠습니다.
        </p>
        <br />
        <br />
        <p
          style={{ lineHeight: '1.5' }}
          className="transition-opacity duration-500"
        >
          <strong
            className={`relative inline-block font-bold border-b border-gray-500 before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-0 before:bg-white before:origin-left before:transition-all before:duration-500 hover:before:w-full ${
              visible === 2 && 'text-white'
            }`}
            onMouseEnter={() => setVisible(2)}
            onMouseLeave={() => setVisible(0)}
          >
            “욕망은 창의성, 사랑 그리고 장수를 촉진하는 강력한 강장제다.”
          </strong>{' '}
          제가 가장 좋아하는 명언 입니다. 더 좋은 서비스를 만들기 위해 만족하지
          않고, 끊임없이 성장하는 개발자가 되겠습니다. 만족하지 않고 성장해
          나가는 프론트엔드 개발자가 되겠습니다.
        </p>
      </div>
    </div>
  )
}

const MobileDesign: React.FC<{
  visible: number
  setVisible: React.Dispatch<React.SetStateAction<number>>
}> = ({ visible, setVisible }) => {
  return (
    <div className="flex flex-col h-full sm:hidden">
      <h1 className="md:pb-6 xl:pb-10 2xl:pb-20">
        <a
          href="#about"
          className="text-white md:text-2xl xl:text-3xl 2xl:text-4xl font-bold hover:text-primary transition-colors duration-500"
        >
          <span className="text-primary">01. </span>About
        </a>
      </h1>
      <div
        className={`w-[90%] m-auto font-notoSans text-[0.75rem] md:text-[2dvw] xl:text-3xl 2xl:text-4xl flex flex-col items-center justify-center transition-all duration-500 ${
          visible > 0 ? 'text-[#696969]' : 'text-white'
        }`}
      >
        <p
          style={{ lineHeight: '1.5' }}
          className="transition-opacity duration-500"
        >
          <strong
            className={`relative inline-block font-bold border-b border-gray-500 before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-0 before:bg-white before:origin-left before:transition-all before:duration-500 hover:before:w-full ${
              visible === 1 && 'text-white'
            }`}
            onMouseEnter={() => setVisible(1)}
            onMouseLeave={() => setVisible(0)}
          >
            상상한 무궁무진한 아이디어를
          </strong>{' '}
          제가 배운 기술로 구현해가는 과정이 재밌습니다. 항상 새로운 방향으로
          도전해보는 프론트엔드 개발자가 되겠습니다.
        </p>
        <br />
        <br />
        <p
          style={{ lineHeight: '1.5' }}
          className="transition-opacity duration-500"
        >
          <strong
            className={`relative inline-block font-bold border-b border-gray-500 before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-0 before:bg-white before:origin-left before:transition-all before:duration-500 hover:before:w-full ${
              visible === 2 && 'text-white'
            }`}
            onMouseEnter={() => setVisible(2)}
            onMouseLeave={() => setVisible(0)}
          >
            “욕망은 창의성, 사랑 그리고 장수를 촉진하는 강력한 강장제다.”
          </strong>{' '}
          제가 가장 좋아하는 명언 입니다. 더 좋은 서비스를 만들기 위해 만족하지
          않고, 끊임없이 성장하는 개발자가 되겠습니다. 만족하지 않고 성장해
          나가는 프론트엔드 개발자가 되겠습니다.
        </p>
      </div>
    </div>
  )
}

export const AboutSection = () => {
  const [visible, setVisible] = useState(0)

  return (
    <section id="about" className="h-screen py-[50px] sm:py-[20dvh]">
      <WebDesign visible={visible} setVisible={setVisible} />
      <MobileDesign visible={visible} setVisible={setVisible} />
    </section>
  )
}

export default AboutSection
