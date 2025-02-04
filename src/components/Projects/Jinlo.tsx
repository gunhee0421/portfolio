'use client'

import Image from 'next/image'
import { TitleLabel } from '../ui/Lable'
import useModal from '@/hook/useModal'
import ImageModal from '../ui/Modal/ImageModal'
import { useState } from 'react'
import NotionModal from '../ui/Modal/NotionModal'

const Jinlo = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const [selectedImage, setSelectedImage] = useState<string>('')

  const {
    isOpen: isOpenNotion,
    openModal: openModalNotion,
    closeModal: closeModalNotion,
  } = useModal()

  return (
    <div className="w-full flex flex-row lg:justify-around h-[100dvh] font-toss">
      <div className="flex flex-col justify-around lg:w-1/2 h-full">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold">
          찐로
        </h1>
        <ol className="grid grid-cols-2 gap-x-8 gap-y-6 w-full lg:flex lg:flex-row lg:justify-between pt-4">
          <li>
            <TitleLabel title="플랫폼" />
            <p>모바일</p>
          </li>
          <li>
            <TitleLabel title="인원" />
            <p>3인</p>
          </li>
          <li>
            <TitleLabel title="기간" />
            <p>2025.01 </p>
            <p>~ 2025.01</p>
          </li>
          <li>
            <TitleLabel title="기여도" />
            <p>프론트엔드 40%</p>
            <p>백엔드 100%</p>
          </li>
          <li>
            <TitleLabel title="주요기술" />
            <p>Next</p>
            <p>Prisma</p>
          </li>
        </ol>
        <div>
          <TitleLabel title="소개" />
          <ol className="list-disc pl-5">
            <li>
              20대 초반 본인의 진로에 대해서 고민하는 대학생들을 위한 진로 탐색
              서비스 입니다.
            </li>
            <li>
              하루의 감정과 활동을 일기로 작성해 AI로 분석해 진로를 추천합니다.
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
          {/* <Link
            className="w-full h-12"
            href="https://jet-captain-13f.notion.site/17a3b2c548ec8031addcea0cb4537bff?pvs=74"
          >
            <button className="w-full h-full border-solid border-[1px] border-white transition-colors duration-500 text-white rounded-lg hover:bg-white hover:text-black">
              자세히 보기
            </button>
          </Link> */}
          <button
            onClick={() => openModalNotion()}
            className="w-full h-12 border-solid border-[1px] border-white transition-colors duration-500 text-white rounded-lg hover:bg-white hover:text-black"
          >
            자세히 보기
          </button>
          <NotionModal
            isOpen={isOpenNotion}
            onClose={closeModalNotion}
            notionUrl="/notions/Jinlo/찐로 17a3b2c548ec8031addcea0cb4537bff.html"
          ></NotionModal>
        </div>
      </div>
      <div className="m-auto hidden lg:block">
        <Image
          src={'/images/project/jinlo/logo.png'}
          alt="image"
          width={350}
          height={500}
          className=" lg:w-[250px] lg:max-h-[400px] xl:w-[350px] xl:max-h-[500px] 2xl:w-[400px] 2xl:max-h-[600px] border-s-white border-[4px] object-cover brightness-75 hover:brightness-100 transition-all duration-500"
        />
      </div>
    </div>
  )
}

export default Jinlo
