'use client'

import Image from 'next/image'
import { TitleLabel, ContentLabel } from '../ui/Lable'
import useModal from '@/hook/useModal'
import ImageModal from '../ui/Modal/ImageModal'
import { useState } from 'react'
import Link from 'next/link'

const GDG = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const [selectedImage, setSelectedImage] = useState<string>('')

  return (
    <div className="w-full flex flex-row lg:justify-around h-[80dvh] font-toss">
      <div className="flex flex-col justify-around lg:w-1/2 h-full">
        <Link href="#gdg">
          <h1 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold hover:text-[#a4a8bc] transition-colors duration-500">
            GDG: IT-Camp
          </h1>
        </Link>
        <ol className="grid grid-cols-2 gap-4 w-full lg:flex lg:flex-row lg:justify-between pt-4">
          <li>
            <TitleLabel title="플랫폼" />
            <ContentLabel>웹/앱</ContentLabel>
          </li>
          <li>
            <TitleLabel title="인원" />
            <ContentLabel>4인</ContentLabel>
          </li>
          <li>
            <TitleLabel title="기간" />
            <ContentLabel>2024.11 ~ 2024.11</ContentLabel>
          </li>
          <li>
            <TitleLabel title="기여도" />
            <ContentLabel>프론트엔드 30%</ContentLabel>
          </li>
          <li>
            <TitleLabel title="주요기술" />
            <ContentLabel>Next.js</ContentLabel>
            <ContentLabel>Prisma</ContentLabel>
          </li>
        </ol>
        <div>
          <TitleLabel title="소개" />
          <ol className="list-disc pl-5">
            <li>
              <ContentLabel>
                GDG 기획캠프에서 참여자들의 쇼규모 시장경제를 형성한
                프로젝트입니다.
              </ContentLabel>
            </li>
            <li>
              <ContentLabel>
                user는 구매, 매출 확이이 가능하고, admin은 상품, 회원과 관련된
                모든 기능이 가능합니다.
              </ContentLabel>
            </li>
          </ol>
        </div>
        <div>
          <TitleLabel title="주요 사진" />
          <div className="flex flex-row gap-2">
            <div
              onClick={() => {
                setSelectedImage('/images/project/gdg/one.png')
                openModal()
              }}
              className="w-1/3 cursor-pointer h-full"
            >
              <Image
                src={'/images/project/gdg/one.png'}
                alt="주요 사진 1"
                width={200}
                height={400}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div
              onClick={() => {
                setSelectedImage('/images/project/gdg/two.png')
                openModal()
              }}
              className="w-1/3 cursor-pointer"
            >
              <Image
                src={'/images/project/gdg/two.png'}
                alt="주요 사진 1"
                width={200}
                height={400}
                className="w-full rounded-md"
              />
            </div>
            <div
              onClick={() => {
                setSelectedImage('/images/project/gdg/three.png')
                openModal()
              }}
              className="w-1/3 cursor-pointer"
            >
              <Image
                src={'/images/project/gdg/three.png'}
                alt="주요 사진 1"
                width={200}
                height={400}
                className="w-full rounded-md"
              />
            </div>
          </div>
          <ImageModal isOpen={isOpen} onClose={closeModal}>
            <Image
              src={selectedImage}
              alt="선택된 이미지"
              width={800}
              height={1600}
              className="w-full rounded-md"
            />
          </ImageModal>
        </div>
        <div className="w-full flex flex-row gap-2">
          <Link href="https://gdg-it-camp.vercel.app/" className="w-full h-12">
            <button className="w-full h-full border-solid border-[1px] border-white transition-all duration-500 text-white rounded-lg hover:bg-gray-200 hover:text-black group relative">
              <span className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-500">
                웹 사이트
              </span>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                GDG: IT-Camp 배포 사이트
              </span>
            </button>
          </Link>
          <Link
            className="w-full"
            href="https://jet-captain-13f.notion.site/GDG-IT-Camp-1b63b2c548ec8156bddef88205954b21"
            target="_blank"
          >
            <button className="w-full h-12 border-solid border-[1px] border-white transition-colors duration-500 text-white rounded-lg hover:bg-white hover:text-black">
              자세히 보기
            </button>
          </Link>
        </div>
      </div>
      <div className="m-auto hidden lg:block">
        <Link href="https://gdg-it-camp.vercel.app/">
          <Image
            src={'/images/project/gdg/logo.gif'}
            alt="image"
            width={350}
            height={800}
            className="lg:w-[250px] lg:max-h-[400px] xl:w-[350px] xl:max-h-[500px] 2xl:w-[400px] 2xl:max-h-[600px] border-s-white border-[4px] object-cover brightness-75 hover:brightness-100 transition-all duration-500"
          />
        </Link>
      </div>
    </div>
  )
}

export default GDG
