"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-slate-900 text-white rounded-2xl shadow-xl max-w-sm w-full p-6 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4">Contact Me</h2>

            <div className="space-y-4">
              <a
                href="mailto:ralpheIsidore@gmail.com"
                className="block px-4 py-3 rounded-lg bg-amber-400 text-slate-900 font-medium hover:bg-amber-300 transition text-center"
              >
                RALPHEISIDORE@gmail.com
              </a>

              <a
                href="tel:+16172303609"
                className="block px-4 py-3 rounded-lg bg-indigo-500/80 text-white font-medium hover:bg-indigo-400 transition text-center"
              >
                617-230-3609
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
