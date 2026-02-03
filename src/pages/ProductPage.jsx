import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, Truck, Shield, RefreshCw, ChevronLeft } from 'lucide-react'
import { useCurrency } from '../components/Currency/CurrencyProvider'
import { useCart } from '../components/Cart/CartProvider'
import { getProductById } from '../data/products'

export default function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState('M')
  const [quantity, setQuantity] = useState(1)
  const { format } = useCurrency()
  const { addToCart } = useCart()
  
  useEffect(() => {
    const foundProduct = getProductById(parseInt(id))
    if (foundProduct) {
      setProduct(foundProduct)
      setSelectedSize(foundProduct.sizes[0])
    }
  }, [id])
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="text-2xl text-gray-400">Товар не найден</div>
      </div>
    )
  }
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize)
    }
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      {/* Навигация */}
      <button
        onClick={() => navigate('/shop')}
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        Назад в магазин
      </button>
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Левая колонка - Изображение */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="space-y-4"
        >
          <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl font-bold text-gray-700 mb-4">C</div>
                <div className="text-2xl text-crimson-400 mb-2">{product.category}</div>
                <div className="text-gray-500">{product.name}</div>
              </div>
            </div>
          </div>
          
          {/* Теги */}
          <div className="flex flex-wrap gap-2">
            {product.tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
        
        {/* Правая колонка - Информация */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          {/* Название и цена */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-2">
              <div className="text-3xl font-bold text-gradient">
                {format(product.price)}
              </div>
              {product.originalPrice && (
                <div className="text-xl text-gray-400 line-through">
                  {format(product.originalPrice)}
                </div>
              )}
            </div>
            <div className="text-gray-400">Артикул: {product.sku}</div>
          </div>
          
          {/* Размеры */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Размер</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-3 rounded-lg border transition-all duration-300
                            ${selectedSize === size
                              ? 'border-crimson-500 bg-gradient-to-r from-crimson-600/20 to-crimson-700/20 text-white'
                              : 'border-gray-700 hover:border-crimson-500/50 text-gray-300 hover:text-white'
                            }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Количество */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Количество</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700"
                >
                  -
                </button>
                <div className="w-16 text-center text-xl font-semibold">{quantity}</div>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700"
                >
                  +
                </button>
              </div>
              <div className="text-gray-400">
                {product.inStock ? (
                  <span className="text-green-400">✓ В наличии</span>
                ) : (
                  <span className="text-red-400">✗ Нет в наличии</span>
                )}
              </div>
            </div>
          </div>
          
          {/* Кнопки действий */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 btn-primary py-4"
            >
              <ShoppingBag className="w-5 h-5" />
              Добавить в корзину
            </button>
            <button
              onClick={() => {
                handleAddToCart()
                navigate('#checkout')
              }}
              className="flex-1 btn-secondary py-4"
            >
              Купить сейчас
            </button>
          </div>
          
          {/* Информация о доставке */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-700/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gray-800">
                <Truck className="w-5 h-5 text-crimson-400" />
              </div>
              <div>
                <div className="font-semibold">Бесплатная доставка</div>
                <div className="text-sm text-gray-400">от $100</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gray-800">
                <RefreshCw className="w-5 h-5 text-crimson-400" />
              </div>
              <div>
                <div className="font-semibold">30 дней на возврат</div>
                <div className="text-sm text-gray-400">Легкий возврат</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gray-800">
                <Shield className="w-5 h-5 text-crimson-400" />
              </div>
              <div>
                <div className="font-semibold">Безопасная оплата</div>
                <div className="text-sm text-gray-400">SSL защита</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Описание и характеристики */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-16 grid lg:grid-cols-2 gap-12"
      >
        <div>
          <h2 className="text-2xl font-bold mb-6">Описание</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Характеристики</h2>
          <ul className="space-y-3">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-crimson-500 mt-2 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}