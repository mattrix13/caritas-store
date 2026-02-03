import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, Eye } from 'lucide-react'
import { useCurrency } from '../Currency/CurrencyProvider'
import { useCart } from '../Cart/CartProvider'

export default function ProductCard({ product }) {
  const { format } = useCurrency()
  const { addToCart } = useCart()
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 
                 hover:border-crimson-500/30 transition-all duration-300 card-hover"
    >
      {/* Бейдж */}
      {product.tags?.includes('new') && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-crimson-600 text-white text-xs font-bold rounded-full">
            NEW
          </span>
        </div>
      )}
      
      {/* Изображение */}
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="relative w-full h-full">
            
          {/* Заглушка изображения */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-700 mb-4">Caritas</div>
              <div className="text-crimson-400 font-semibold">{product.category}</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Информация */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gradient">
              {format(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm">
                {format(product.originalPrice)}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => addToCart(product)}
              className="p-2 bg-gray-700 hover:bg-crimson-600 rounded-lg transition-colors"
              title="Добавить в корзину"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
            
            <Link
              to={`/product/${product.id}`}
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              title="Подробнее"
            >
              <Eye className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {product.sizes.slice(0, 3).map((size) => (
            <span
              key={size}
              className="px-2 py-1 text-xs bg-gray-700/50 rounded"
            >
              {size}
            </span>
          ))}
          {product.sizes.length > 3 && (
            <span className="px-2 py-1 text-xs text-gray-400">
              +{product.sizes.length - 3}
            </span>
          )}
        </div>
        
        <Link
          to={`/product/${product.id}`}
          className="block w-full py-3 text-center bg-gray-700/50 hover:bg-gray-700 
                   rounded-lg font-medium transition-colors"
        >
          Подробнее
        </Link>
      </div>
    </motion.div>
  )
}