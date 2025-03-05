import { useState, useCallback, useEffect, useRef } from 'react'

interface UseModalReturn {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
  toggleModal: () => void
}

const useModal = (): UseModalReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const prevIsOpen = useRef<boolean>(false)

  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggleModal = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  useEffect(() => {
    if (prevIsOpen.current === isOpen) return

    if (isOpen) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'unset'
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.documentElement.style.overflow = 'unset'
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  }
}

export default useModal
