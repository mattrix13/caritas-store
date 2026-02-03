import React from 'react'
import { motion } from 'framer-motion'
import { Trash2 } from 'lucide-react'
import { useCurrency } from '../Currency/CurrencyProvider'

export default function CartItem({ item, onRemove, onUpdateQuantity }) {
  const { format, getSymbol } = useCurrency()
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="flex gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/30"
    >
      {/* Изображение */}
      <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 
                    flex items-center justify-center flex-shrink-0">
        <div className="text-2xl font-bold text-gray-600">C</div>
      </div>
      
      {/* Информация */}
      <div className="flex-1">
        <div className="flex justify-between mb-2">
          <h3 className="font-semibold">{item.name}</h3>
          <button
            onClick={() => onRemove(item.id, item.size)}
            className="text-gray-400 hover:text-red-400 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            Размер: <span className="text-white">{item.size}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => onUpdateQuantity(item.id, item.size, item.quantity - 1)}
                className="w-6 h-6 rounded bg-gray-700 hover:bg-gray-600 flex items-center 
                         justify-center transition-colors"
              >
                -
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(item.id, item.size, item.quantity + 1)}
                className="w-6 h-6 rounded bg-gray-700 hover:bg-gray-600 flex items-center 
                         justify-center transition-colors"
              >
                +
              </button>
            </div>
            
            <div className="font-bold text-gradient">
              {getSymbol()}{(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}