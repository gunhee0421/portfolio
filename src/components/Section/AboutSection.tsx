'use client'

import React, { useState, useRef } from 'react'
import { SectionTitle } from '../ui/Title'
import { motion, useInView } from 'framer-motion'

const WebDesign: React.FC<{
  visible: number
  setVisible: React.Dispatch<React.SetStateAction<number>>
  isInView: boolean
}> = ({ visible, setVisible, isInView }) => {
  return (
    <motion.div
      className="hidden sm:flex flex-row justify-between h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="w-[40%] relative group pr-4">
        <SectionTitle title="About" />
        <div className="flex justify-center items-center transition-opacity duration-700 w-[80%] h-[80%]">
          {visible === 1 && (
            <motion.iframe
              src="https://giphy.com/embed/SOb4AcaDitenU4XKdC"
              className="w-full h-[70%] giphy-embed"
              allowFullScreen
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: visible === 1 ? 1 : 0,
                scale: visible === 1 ? 1 : 0.9,
              }}
              transition={{ duration: 0.5 }}
            ></motion.iframe>
          )}
          {visible === 2 && (
            <motion.iframe
              src="https://giphy.com/embed/He4wudo59enf2"
              className="w-full h-[70%] giphy-embed"
              allowFullScreen
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: visible === 2 ? 1 : 0,
                scale: visible === 2 ? 1 : 0.9,
              }}
              transition={{ duration: 0.5 }}
            ></motion.iframe>
          )}
        </div>
      </div>
      <div
        className={`w-[60%] font-notoSans md:text-[1.7dvw] xl:text-2xl 2xl:text-3xl flex flex-col items-center justify-center transition-all duration-500 ${
          visible > 0 ? 'text-[#696969]' : 'text-white'
        }`}
      >
        <motion.p
          className="transition-opacity duration-500"
          style={{ lineHeight: '1.5' }}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
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
        </motion.p>
        <br />
        <br />
        <motion.p
          className="transition-opacity duration-500"
          style={{ lineHeight: '1.5' }}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
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
          제가 가장 좋아하는 명언입니다. 더 좋은 서비스를 만들기 위해 만족하지
          않고, 끊임없이 성장하는 개발자가 되겠습니다.
        </motion.p>
      </div>
    </motion.div>
  )
}

const MobileDesign: React.FC<{
  visible: number
  setVisible: React.Dispatch<React.SetStateAction<number>>
  isInView: boolean
}> = ({ visible, setVisible, isInView }) => {
  return (
    <motion.div
      className="flex flex-col h-full sm:hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle title="About" />
      <div
        className={`w-[90%] m-auto font-notoSans text-[0.75rem] md:text-[2dvw] xl:text-3xl 2xl:text-4xl flex flex-col items-center justify-center transition-all duration-500 ${
          visible > 0 ? 'text-[#696969]' : 'text-white'
        }`}
      >
        <p
          className="transition-opacity duration-500"
          style={{ lineHeight: '1.5' }}
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
          제가 배운 기술로 구현해가는 과정이 재밌습니다.
        </p>
        <br />
        <br />
        <p
          className="transition-opacity duration-500"
          style={{ lineHeight: '1.5' }}
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
          제가 가장 좋아하는 명언입니다.
        </p>
      </div>
    </motion.div>
  )
}

export const AboutSection = () => {
  const [visible, setVisible] = useState(0)
  const aboutRef = useRef(null)
  const isInView = useInView(aboutRef, { once: true, margin: '-100px 0px' })

  return (
    <div
      ref={aboutRef}
      className="px-8 sm:px-[4rem] md:px-[4rem] scrollbar-hide lg:px-[5rem] xl:[7rem] 2xl:px-[15rem]"
    >
      <section id="about" className="h-screen py-[50px] sm:py-[20dvh]">
        <WebDesign
          visible={visible}
          setVisible={setVisible}
          isInView={isInView}
        />
        <MobileDesign
          visible={visible}
          setVisible={setVisible}
          isInView={isInView}
        />
      </section>
    </div>
  )
}

export default AboutSection
