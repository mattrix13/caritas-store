import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState('ru')
  const [isOpen, setIsOpen] = useState(false)
  
  const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'eu', name: 'English', flag: '🇺🇸' }
  ]
  
  const currentLanguage = languages.find(lang => lang.code === language)
  
  const handleLanguageChange = (langCode) => {
    setLanguage(langCode)
    setIsOpen(false)
    // Здесь можно добавить логику смены языка в приложении
  }
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 
                   border border-gray-700 hover:border-crimson-500 transition-all duration-300"
      >
        <Globe className="w-4 h-4 text-crimson-400" />
        <span className="font-medium">{currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}</span>
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-48 rounded-lg bg-gray-800 border border-gray-700 
                     shadow-xl shadow-black/50 z-50 overflow-hidden"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 text-left hover:bg-gray-700 transition-colors
                          ${language === lang.code ? 'bg-gray-700' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{lang.flag}</span>
                    <div>
                      <div className="font-medium">{lang.name}</div>
                      <div className="text-sm text-gray-400">{lang.code.toUpperCase()}</div>
                    </div>
                  </div>
                  {language === lang.code && (
                    <div className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse" />
                  )}
                </div>
              </button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  )
}