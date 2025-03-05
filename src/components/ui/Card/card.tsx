import React, { useState } from 'react'
import Image from 'next/image'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import useModal from '@/hook/useModal'
import { ProjectMobileModal, ProjectModal } from '@/components/ui/Modal/modal'
import { CardData } from '@/components/Project/Project'
import { useMediaQuery } from 'react-responsive'

export type CustomCardProps = {
  data: CardData
}

export const CustomCard: React.FC<CustomCardProps> = ({ data }) => {
  const { title, description, imageUrl, tags = [] } = data
  const [isHovered, setIsHovered] = useState(false)
  const { isOpen, openModal, closeModal } = useModal()

  const isLg = useMediaQuery({ minWidth: 1024 })

  return (
    <>
      <Card
        className={`w-full h-full overflow-hidden flex flex-col relative transition-all duration-300 ${
          isHovered ? 'shadow-2xl -translate-y-1' : 'shadow-md'
        }`}
        onMouseEnter={() => isLg && setIsHovered(true)}
        onMouseLeave={() => isLg && setIsHovered(false)}
        onClick={() => !isLg && openModal()}
      >
        {imageUrl && (
          <div
            className={`relative w-full h-48 ${isHovered && isLg ? 'hidden' : 'block'}`}
          >
            <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
        )}
        <div className="flex flex-col flex-grow relative">
          <CardHeader
            className={`absolute inset-0 flex flex-col items-center justify-center ${
              isHovered && isLg ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <CardTitle className="text-white text-2xl">{title}</CardTitle>
            <button
              onClick={openModal}
              className="mt-4 border border-white text-white px-6 py-2 rounded-md transition-all hover:bg-white hover:text-black"
            >
              자세히 보기
            </button>
          </CardHeader>
          {!isHovered && (
            <>
              <CardHeader className={imageUrl ? 'pt-4' : 'p-6'}>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              {description && (
                <CardContent className="flex-grow">
                  <CardDescription>{description}</CardDescription>
                </CardContent>
              )}
            </>
          )}
        </div>
        {!isHovered && tags.length > 0 && (
          <CardFooter className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-700 text-white text-sm px-3 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </CardFooter>
        )}
      </Card>
      {isLg ? (
        <ProjectModal isOpen={isOpen} onClose={closeModal} data={data} />
      ) : (
        <ProjectMobileModal isOpen={isOpen} onClose={closeModal} data={data} />
      )}
    </>
  )
}
