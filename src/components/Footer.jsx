import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-gray-700 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold mb-2">
              <span className="text-white">CARITAS</span>
              <span className="text-crimson-500"> STORE</span>
            </div>
            <p className="text-gray-400 text-sm">
              Premium streetwear since 2020
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <Link 
              to="/policies" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </Link>
            <Link 
              to="/policies" 
              onClick={() => window.scrollTo(0, 0)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Условия использования
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Контакты
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CARITAS. Все права защищены.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Оплата осуществляется по согласованию после оформления заказа.
          </p>
        </div>
      </div>
    </footer>
  )
}