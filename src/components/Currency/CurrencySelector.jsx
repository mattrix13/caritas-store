import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Globe } from 'lucide-react'
import { useCurrency } from './CurrencyProvider'

export default function CurrencySelector() {
  const { currency, changeCurrency, getSymbol } = useCurrency()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  
  const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'RUB', symbol: '₽', name: 'Russian Ruble' },
    { code: 'BYN', symbol: 'Br', name: 'Belarusian Ruble' }
  ]
  
  const currentCurrency = currencies.find(c => c.code === currency)
  
  // Закрытие по клику вне компонента
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-gray-800 
                   hover:bg-gray-700 border border-gray-700 hover:border-crimson-500 
                   transition-all duration-300 w-full sm:w-auto"
        aria-label="Выбрать валюту"
      >
        <Globe className="w-4 h-4 text-crimson-400 flex-shrink-0" />
        <span className="font-medium text-sm sm:text-base truncate">
          {currentCurrency?.symbol} {currency}
        </span>
        <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-full sm:w-48 rounded-lg bg-gray-800 
                     border border-gray-700 shadow-xl shadow-black/50 z-50 overflow-hidden"
          >
            {currencies.map((curr) => (
              <button
                key={curr.code}
                onClick={() => {
                  changeCurrency(curr.code)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-3 text-left hover:bg-gray-700 transition-colors
                          flex items-center justify-between
                          ${currency === curr.code ? 'bg-gray-700' : ''}`}
              >
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm sm:text-base truncate">
                    {curr.symbol} {curr.code}
                  </div>
                  <div className="text-xs text-gray-400 truncate">
                    {curr.name}
                  </div>
                </div>
                {currency === curr.code && (
                  <div className="w-2 h-2 rounded-full bg-crimson-500 ml-2 flex-shrink-0" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}