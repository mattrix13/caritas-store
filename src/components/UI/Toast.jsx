import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, Info, AlertTriangle, X } from 'lucide-react'

const iconMap = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
  warning: AlertTriangle
}

const colorMap = {
  success: 'text-green-400',
  error: 'text-red-400',
  info: 'text-blue-400',
  warning: 'text-yellow-400'
}

export default function Toast({ 
  message, 
  type = 'info', 
  duration = 3000, 
  onClose 
}) {
  const Icon = iconMap[type]
  
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        onClose?.()
      }, duration)
      
      return () => clearTimeout(timer)
    }
  }, [duration, onClose])
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-800 border 
                      border-gray-700 shadow-2xl shadow-black/50 min-w-[300px] max-w-md">
          <div className={`flex-shrink-0 ${colorMap[type]}`}>
            <Icon className="w-6 h-6" />
          </div>
          
          <div className="flex-1">
            <p className="text-sm font-medium">{message}</p>
          </div>
          
          <button
            onClick={onClose}
            className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}