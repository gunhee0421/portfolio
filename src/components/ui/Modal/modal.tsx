import { CardData } from '@/components/Project/Project'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  data: CardData
}

export const ProjectModal = ({ isOpen, onClose, data }: ProjectModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                onClose()
              }}
              className="absolute top-6 right-6 rounded-full bg-white p-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
          <motion.div
            className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[95dvh] rounded-lg p-6 z-50 shadow-lg bg-[#4a4a4a]`}
            initial={{ scale: 0.8, opacity: 0, x: '-50%', y: '-50%' }}
            animate={{ scale: 1, opacity: 1, x: '-50%', y: '-50%' }}
            exit={{ scale: 0.8, opacity: 0, x: '-50%', y: '-50%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {data.component}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export const ProjectMobileModal = ({
  isOpen,
  onClose,
  data,
}: ProjectModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-lg p-6 z-50 shadow-lg bg-[#4a4a4a] lg:h-auto lg:max-w-3xl"
            initial={{ scale: 0.8, opacity: 0, x: '-50%', y: '-50%' }}
            animate={{ scale: 1, opacity: 1, x: '-50%', y: '-50%' }}
            exit={{ scale: 0.8, opacity: 0, x: '-50%', y: '-50%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="lg:hidden absolute top-0 left-0 w-full h-[50px flex items-center px-4 py-2">
              <button onClick={onClose} className="ml-auto text-white">
                <X size={24} />
              </button>
            </div>
            <div className="w-full h-full lg:h-auto pt-[25px] lg:pt-0 flex flex-col">
              {data.component}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
