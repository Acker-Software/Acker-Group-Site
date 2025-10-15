"use client"

import type { PropsWithChildren } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface ModalProps extends PropsWithChildren {
  isOpen: boolean
  onClose: () => void
  title?: string
  className?: string
}

export const Modal = ({ isOpen, onClose, title, children, className }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`relative bg-slate-800 rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-auto ${className || ''}`}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                {title && (
                  <h2 className="text-xl font-semibold text-white">{title}</h2>
                )}
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-white transition"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
