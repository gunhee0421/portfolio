'use client'

import Image from 'next/image'
import { TitleLabel, ContentLabel } from '../ui/Lable'
import useModal from '@/hook/useModal'
import ImageModal from '../ui/Modal/ImageModal'
import { useState } from 'react'
import Link from 'next/link'

const Jinlo = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const [selectedImage, setSelectedImage] = useState<string>('')

  return (
    <div className="w-full flex flex-row lg:justify-around h-[80dvh] font-toss">
      <div className="flex flex-col justify-around lg:w-1/2 h-full">
        <h1 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold">
          찐로
        </h1>
        <ol className="grid grid-cols-2 gap-4 w-full lg:flex lg:flex-row lg:justify-between pt-4">
          <li>
            <TitleLabel title="플랫폼" />
            <ContentLabel>모바일</ContentLabel>
          </li>
          <li>
            <TitleLabel title="인원" />
            <ContentLabel>3인</ContentLabel>
          </li>
          <li>
            <TitleLabel title="기간" />
            <ContentLabel>2025.01 ~ 2025.01</ContentLabel>
          </li>
          <li>
            <TitleLabel title="기여도" />
            <ContentLabel>프론트엔드 40%</ContentLabel>
            <ContentLabel>백엔드 100%</ContentLabel>
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
                20대 초반 본인의 진로에 대해서 고민하는 대학생들을 위한 진로
                탐색 서비스 입니다.
              </ContentLabel>
            </li>
            <li>
              <ContentLabel>
                하루의 감정과 활동을 일기로 작성해 AI로 분석해 진로를
                추천합니다.
              </ContentLabel>
            </li>
          </ol>
        </div>
        <div>
          <TitleLabel title="주요 사진" />
          <div className="flex flex-row gap-2">
            <div
              onClick={() => {
                setSelectedImage('/images/project/jinlo/home.png')
                openModal()
              }}
              className="w-1/3 cursor-pointer h-full"
            >
              <Image
                src={'/images/project/jinlo/home.png'}
                alt="주요 사진 1"
                width={200}
                height={400}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div
              onClick={() => {
                setSelectedImage('/images/project/jinlo/one.png')
                openModal()
              }}
              className="w-1/3 cursor-pointer"
            >
              <Image
                src={'/images/project/jinlo/one.png'}
                alt="주요 사진 1"
                width={200}
                height={400}
                className="w-full rounded-md"
              />
            </div>
            <div
              onClick={() => {
                setSelectedImage('/images/project/jinlo/two.png')
                openModal()
              }}
              className="w-1/3 cursor-pointer"
            >
              <Image
                src={'/images/project/jinlo/two.png'}
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
          <button className="w-full h-12 border-solid border-[1px] border-white transition-all duration-500 text-white rounded-lg hover:bg-gray-200 hover:text-black group relative">
            <span className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-500">
              웹 사이트
            </span>
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              현재 배포 중단됬습니다.
            </span>
          </button>
          <Link
            className="w-full"
            href="https://jet-captain-13f.notion.site/1b63b2c548ec813ba20ec30b8ce3c739"
            target="_blank"
          >
            <button className="w-full h-12 border-solid border-[1px] border-white transition-colors duration-500 text-white rounded-lg hover:bg-white hover:text-black">
              자세히 보기
            </button>
          </Link>
        </div>
      </div>
      <div className="m-auto hidden lg:block">
        <Image
          src={'/images/project/jinlo/logo.png'}
          alt="image"
          width={350}
          height={500}
          className="lg:w-[250px] lg:max-h-[400px] xl:w-[350px] xl:max-h-[500px] 2xl:w-[400px] 2xl:max-h-[600px] border-s-white border-[4px] object-cover brightness-75 hover:brightness-100 transition-all duration-500"
        />
      </div>
    </div>
  )
}

export default Jinlo
