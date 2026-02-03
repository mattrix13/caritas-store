import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, Menu, X, Home, Store, Info, Mail } from 'lucide-react'
import { useCart } from '../Cart/CartProvider'
import CurrencySelector from '../Currency/CurrencySelector'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getItemCount, setIsCartOpen } = useCart()
  const location = useLocation()
  
  const navItems = [
    { path: '/', label: 'Главная', icon: <Home className="w-5 h-5" /> },
    { path: '/shop', label: 'Магазин', icon: <Store className="w-5 h-5" /> },
    { path: '/about', label: 'О бренде', icon: <Info className="w-5 h-5" /> },
    { path: '/contact', label: 'Контакты', icon: <Mail className="w-5 h-5" /> },
  ]
  
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 glass-effect border-b border-gray-700"
    >
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Логотип - адаптивный */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-crimson-600 to-crimson-800 
                            rounded-lg flex items-center justify-center"
              >
                <span className="text-white font-bold text-lg sm:text-xl">C</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-crimson-600 to-crimson-800 
                            rounded-lg blur opacity-30" />
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-tighter hidden sm:block">
              CARITAS
            </span>
            <span className="text-xl font-bold tracking-tighter sm:hidden">C</span>
          </Link>
          
          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-gray-300 hover:text-white transition-colors
                          flex items-center gap-2 text-sm lg:text-base
                          ${location.pathname === item.path ? 'text-white' : ''}`}
              >
                <span className="hidden lg:block">{item.icon}</span>
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-crimson-600 to-crimson-400"
                  />
                )}
              </Link>
            ))}
          </nav>
          
          {/* Контролы */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            
            <div className="hidden sm:block">
              <CurrencySelector />
            </div>
            
            {/* Мобильные контролы */}
            <div className="flex items-center gap-1 sm:hidden">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-gray-800 rounded-lg transition-colors group"
              >
                <ShoppingBag className="w-5 h-5 text-gray-300 group-hover:text-white" />
                {getItemCount() > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-crimson-600 rounded-full 
                             flex items-center justify-center"
                  >
                    <span className="text-xs font-bold">{getItemCount()}</span>
                  </motion.div>
                )}
              </button>
            </div>
            
            {/* Десктопная корзина */}
            <div className="hidden sm:block">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-gray-800 rounded-lg transition-colors group"
              >
                <ShoppingBag className="w-6 h-6 text-gray-300 group-hover:text-white" />
                {getItemCount() > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-crimson-600 rounded-full 
                             flex items-center justify-center"
                  >
                    <span className="text-xs font-bold">{getItemCount()}</span>
                  </motion.div>
                )}
              </button>
            </div>
            
            {/* Мобильное меню */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors sm:hidden"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Мобильное меню */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-4 pb-6">
              {/* Мобильные контролы */}
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="w-full mb-2">
                  <LanguageSwitcher />
                </div>
                <div className="w-full">
                  <CurrencySelector />
                </div>
              </div>
              
              {/* Навигация */}
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                              ${location.pathname === item.path 
                                ? 'bg-gray-800 text-white' 
                                : 'hover:bg-gray-800 text-gray-300'
                              }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </nav>
              
              {/* Инфо в мобильном меню */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 px-4">
                  Premium streetwear since 2020
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}