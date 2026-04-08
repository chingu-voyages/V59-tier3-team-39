import { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'

interface HintModalProps {
  isOpen: boolean
  hint?: string
  onClose: () => void
}

const HintModal = ({ isOpen, hint, onClose }: HintModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !hint) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-200"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none">
        <div
          className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 pointer-events-auto transform transition-all duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-secondary-shade">💡 Hint</h2>
            <button
              onClick={onClose}
              className="cursor-pointer"
              aria-label="Close hint modal"
            >
              <IoClose color="#8C6239" size={26} className="md:ml-39" />
            </button>
          </div>

          <p className="text-gray-700 text-base leading-relaxed mb-6">{hint}</p>

          <button
            onClick={onClose}
            className="w-full cursor-pointer px-4 py-3 bg-secondary-tint text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Got it!
          </button>
        </div>
      </div>
    </>
  )
}

export default HintModal
