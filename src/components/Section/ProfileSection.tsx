'use client'

import Image from 'next/image'
import { SectionTitle } from '../ui/Title'
import { Mail } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const ProfileSection = () => {
  const [job, setJob] = useState('FrontEnd Developer')
  const profileRef = useRef(null)
  const isInView = useInView(profileRef, { once: true, margin: '-100px 0px' })

  useEffect(() => {
    const title = ['FrontEnd Developer', 'Full Stack Developer']
    let index = 0

    const interval = setInterval(() => {
      index = (index + 1) % title.length
      setJob(title[index])
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <article
      ref={profileRef}
      id="profile"
      className="px-8 sm:px-[4rem] md:px-[4rem] scrollbar-hide lg:px-[5rem] xl:[7rem] 2xl:px-[15rem]"
    >
      <div className="w-full h-screen flex flex-col py-[50px] sm:py-[10dvh] lg:py-[20dvh] font-notoSans">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title="Profile" />
        </motion.div>

        <div className="h-full flex flex-col justify-center items-center lg:hidden">
          <motion.div
            className="flex flex-1 justify-end items-center relative"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-[256px] h-[256px] xl:w-[356px] xl:h-[356px] border-s-white border-[1px] absolute top-[10%] right-[15%] xl:top-0"></div>
            <div className="w-[256px] h-[256px] xl:w-[356px] xl:h-[356px] overflow-hidden relative">
              <Image
                src="/images/profile.png"
                alt="profile"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex pl-[10vw] flex-col gap-3">
              <h1 className="text-white font-bold text-2xl lg:text-4xl">
                조건희{' '}
                <span className="text-primary font-normal text-xl lg:text-3xl">
                  Jo Gunhee
                </span>
              </h1>
              <h2 className="text-black bg-white w-fit px-2 py-1 font-bold text-lg lg:text-3xl font-blackHanSans">
                <motion.span
                  key={job}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {job}
                </motion.span>
              </h2>
              <motion.div
                className="mt-12 flex flex-row gap-4 items-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Mail size={30} color="white" />
                <p className="text-white text-lg lg:text-2xl">
                  rjsgml771@naver.com
                </p>
              </motion.div>
              <motion.a
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                href="https://github.com/gunhee0421"
                className="flex flex-row gap-4 items-center text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
                </svg>
                <p className="text-white text-lg">
                  https://github.com/gunhee0421
                </p>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:flex flex-row h-full">
          <motion.div
            className="flex flex-1 justify-end items-center relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-[256px] h-[256px] xl:w-[356px] xl:h-[356px] border-s-white border-[1px] absolute top-[10%] right-[15%] xl:top-0"></div>
            <div className="w-[256px] h-[256px] xl:w-[356px] xl:h-[356px] overflow-hidden relative">
              <Image
                src="/images/profile.png"
                alt="profile"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex pl-[10vw] flex-col gap-3">
              <h1 className="text-white font-bold text-4xl">
                조건희{' '}
                <span className="text-primary font-normal text-3xl">
                  Jo Gunhee
                </span>
              </h1>
              <h2 className="text-black bg-white w-fit px-2 py-1 font-bold text-3xl font-blackHanSans">
                <motion.span
                  key={job}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {job}
                </motion.span>
              </h2>
              <motion.div
                className="mt-12 flex flex-row gap-4 items-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Mail size={30} color="white" />
                <p className="text-white text-2xl">rjsgml771@naver.com</p>
              </motion.div>
              <motion.a
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                href="https://github.com/gunhee0421"
                className="flex flex-row gap-4 items-center text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
                </svg>
                <p className="text-white text-2xl">
                  https://github.com/gunhee0421
                </p>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  )
}

export default ProfileSection
