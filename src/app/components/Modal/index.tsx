"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  description?: string
  link?: string
}

export default function Modal({ isOpen, onClose, description, link }: ModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-slate-900 text-white rounded-xl shadow-xl max-w-md w-full p-6 relative"
            // smoke-in
            initial={{ opacity: 0, scale: 0.5, rotate: -10, filter: "blur(20px)" }}
            animate={{
              opacity: 1,
              scale: [0.5, 1.2, 1],
              rotate: [-10, 5, 0],
              filter: "blur(0px)",
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            // shatter-out
            exit={{
              opacity: [1, 0.8, 0],
              scale: [1, 1.3, 0],
              rotate: [0, -30, 60, -90],
              x: [-10, 10, -15, 15, 0],
              filter: "blur(8px)",
              transition: { duration: 0.7, ease: "easeIn" },
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            {/* Content */}
            <h2 className="text-lg font-semibold mb-4">Project Info</h2>
            <p className="text-slate-300 mb-6">{description}</p>

            <div className="flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600"
              >
                Close
              </button>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-semibold"
                >
                  Continue
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
