'use client'

import Image from 'next/image'
import { SectionTitle } from '../ui/Title'
import { Mail } from 'lucide-react'

const ProfileSection = () => {
  return (
    <article
      id="profile"
      className="px-8 sm:px-[4rem] md:px-[4rem] scrollbar-hide lg:px-[5rem] xl:[7rem] 2xl:px-[15rem]"
    >
      <div className="w-full h-screen flex flex-col py-[50px] sm:py-[20dvh] font-notoSans">
        <SectionTitle title="Profile" />
        <div className="flex flex-row h-full">
          <div className="flex flex-1 justify-end items-center relative">
            <div className="w-[256px] h-[256px] xl:w-[356px] xl:h-[356px] border-s-white border-[1px] absolute top-[10%] right-[15%] xl:top-0"></div>
            <div className="w-[256px] h-[256px] xl:w-[356px] xl:h-[356px] overflow-hidden relative">
              <Image
                src="/images/profile.png"
                alt="profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex pl-[10vw] flex-col gap-3">
              <h1 className="text-white font-bold text-4xl">
                조건희{' '}
                <span className="text-primary font-normal text-3xl">
                  Jo Gunhee
                </span>
              </h1>
              <h2 className="text-black bg-white w-fit px-2 py-1 font-bold text-3xl font-blackHanSans">
                FrontEnd Developer
              </h2>
              <div className="mt-12 flex flex-row gap-4 items-center">
                <Mail size={30} color="white" />
                <p className="text-white text-2xl">rjsgml771@naver.com</p>
              </div>
              <a
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProfileSection
