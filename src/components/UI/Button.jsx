import React from 'react'
import { motion } from 'framer-motion'

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  disabled = false,
  ...props 
}) {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 active:scale-95"
  
  const variants = {
    primary: "bg-gradient-to-r from-crimson-600 to-crimson-700 text-white hover:from-crimson-700 hover:to-crimson-800 hover:shadow-lg hover:shadow-crimson-900/30",
    secondary: "border-2 border-gray-600 text-gray-300 hover:border-crimson-500 hover:text-crimson-400",
    outline: "border border-gray-700 text-gray-300 hover:border-crimson-500 hover:text-white",
    ghost: "text-gray-400 hover:text-white hover:bg-gray-800"
  }
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : ""
  
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      onClick={disabled ? undefined : onClick}
      className={`${baseClasses} ${variants[variant]} ${disabledClasses} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  )
}