import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react'
import { useCart } from '../Cart/CartProvider'
import { useCurrency } from '../Currency/CurrencyProvider'

export default function CartSidebar() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getFormattedTotal, clearCart } = useCart()
  const { getSymbol } = useCurrency()
  
  const handleCheckout = () => {
    setIsCartOpen(false)
    window.location.href = '/contact'
  }
  
  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full sm:max-w-sm z-50"
          >
            <div className="h-full flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 
                          border-l border-gray-700 shadow-2xl shadow-black/50 overflow-hidden"
            >
              {/* Header */}
              <div className="p-4 sm:p-6 border-b border-gray-700 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="w-6 h-6 text-crimson-400 flex-shrink-0" />
                    <div>
                      <h2 className="text-xl font-bold">Корзина</h2>
                      <div className="text-sm text-gray-400">
                        {cart.length} {cart.length === 1 ? 'товар' : cart.length < 5 ? 'товара' : 'товаров'}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors flex-shrink-0"
                    aria-label="Закрыть корзину"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Items */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <ShoppingBag className="w-16 h-16 text-gray-600 mb-4" />
                    <div className="text-xl font-semibold mb-2">Корзина пуста</div>
                    <div className="text-gray-400 mb-6 px-4">
                      Добавьте товары в корзину
                    </div>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 
                               rounded-lg font-medium hover:from-gray-600 hover:to-gray-700 
                               transition-all text-sm sm:text-base"
                    >
                      Продолжить покупки
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <motion.div
                        key={`${item.id}-${item.size}-${index}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/30"
                      >
                        {/* Изображение */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-gradient-to-br 
                                      from-gray-800 to-gray-900 flex items-center justify-center flex-shrink-0"
                        >
                          <div className="text-xl sm:text-2xl font-bold text-gray-600">C</div>
                        </div>
                        
                        {/* Информация */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-sm sm:text-base truncate pr-2">
                              {item.name}
                            </h3>
                            <button
                              onClick={() => removeFromCart(item.id, item.size)}
                              className="text-gray-400 hover:text-red-400 transition-colors flex-shrink-0"
                              aria-label="Удалить товар"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <div className="text-xs text-gray-400 mb-3">
                            Размер: <span className="text-white">{item.size}</span>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                className="w-6 h-6 sm:w-7 sm:h-7 rounded bg-gray-700 hover:bg-gray-600 
                                         flex items-center justify-center transition-colors"
                                aria-label="Уменьшить количество"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-6 sm:w-8 text-center text-sm sm:text-base font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                className="w-6 h-6 sm:w-7 sm:h-7 rounded bg-gray-700 hover:bg-gray-600 
                                         flex items-center justify-center transition-colors"
                                aria-label="Увеличить количество"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            
                            <div className="font-bold text-gradient text-sm sm:text-base">
                              {getSymbol()}{(item.price * item.quantity).toFixed(2)}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Очистить корзину */}
                    <button
                      onClick={clearCart}
                      className="w-full py-3 text-center text-red-400 hover:text-red-300 
                               border border-red-400/20 hover:border-red-400/40 rounded-lg 
                               transition-colors text-sm sm:text-base"
                    >
                      Очистить корзину
                    </button>
                  </div>
                )}
              </div>
              
              {/* Footer */}
              {cart.length > 0 && (
                <div className="p-4 sm:p-6 border-t border-gray-700 space-y-4 flex-shrink-0">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm sm:text-base">Итого:</span>
                    <span className="text-xl sm:text-2xl font-bold text-gradient">
                      {getFormattedTotal()}
                    </span>
                  </div>
                  
                  <button 
                    onClick={handleCheckout}
                    className="w-full py-3 sm:py-4 bg-gradient-to-r from-crimson-600 to-crimson-700 
                             text-white rounded-lg font-semibold hover:from-crimson-700 
                             hover:to-crimson-800 transition-all text-sm sm:text-base"
                  >
                    Перейти к оформлению
                  </button>
                  
                  <p className="text-center text-xs sm:text-sm text-gray-500">
                    После оформления мы свяжемся с вами для подтверждения заказа
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}