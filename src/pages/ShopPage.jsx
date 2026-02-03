import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Filter, Grid, List } from 'lucide-react'
import ProductGrid from '../components/Product/ProductGrid'
import { products } from '../data/products'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('newest')
  const [isMobile, setIsMobile] = useState(false)
  
  // Определяем мобильное устройство
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const categories = [
    { id: 'all', name: 'Все товары' },
    { id: 'hoodies', name: 'Худи' },
    { id: 'tshirts', name: 'Футболки' },
    { id: 'pants', name: 'Штаны' },
    { id: 'jackets', name: 'Куртки' },
    { id: 'accessories', name: 'Аксессуары' }
  ]
  
  const sortOptions = [
    { id: 'newest', name: 'Сначала новые' },
    { id: 'price-low', name: 'Цена: по возрастанию' },
    { id: 'price-high', name: 'Цена: по убыванию' }
  ]
  
  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  )
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      default:
        return 0 // Для 'newest' оставляем исходный порядок
    }
  })
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8"
    >
      {/* Заголовок */}
      <div className="mb-8 sm:mb-10 md:mb-12 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4"
        >
          <span className="text-gray-100">CARITAS</span>
          <span className="text-gradient"> SHOP</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2"
        >
          Ограниченные выпуски премиум качества. Эксклюзивные коллекции.
        </motion.p>
      </div>
      
      {/* Фильтры */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6 sm:mb-8 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gray-800/30 border border-gray-700/50"
      >
        <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6">
          {/* Категории */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-crimson-400 flex-shrink-0" />
              <h3 className="font-semibold text-sm sm:text-base">Категории</h3>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg transition-all duration-300 text-xs sm:text-sm
                            ${selectedCategory === category.id
                              ? 'bg-gradient-to-r from-crimson-600 to-crimson-700 text-white'
                              : 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white'
                            }`}
                >
                  {isMobile && category.name.length > 10 
                    ? category.name.split(' ')[0] 
                    : category.name
                  }
                </button>
              ))}
            </div>
          </div>
          
          {/* Сортировка и вид */}
          <div className="flex gap-3 sm:gap-4">
            {/* Сортировка */}
            <div className="flex-1 min-w-[120px] sm:min-w-[140px]">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <h3 className="font-semibold text-sm sm:text-base whitespace-nowrap">
                  {isMobile ? 'Сорт.' : 'Сортировка'}
                </h3>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 
                         text-gray-300 focus:outline-none focus:border-crimson-500 
                         text-sm sm:text-base appearance-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {isMobile && option.name.length > 15 
                      ? option.name.split(':')[0] 
                      : option.name
                    }
                  </option>
                ))}
              </select>
            </div>
            
            {/* Вид отображения */}
            <div>
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <h3 className="font-semibold text-sm sm:text-base whitespace-nowrap">
                  {isMobile ? 'Вид' : 'Вид'}
                </h3>
              </div>
              <div className="flex gap-1.5 sm:gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 sm:p-2 rounded-lg transition-colors flex items-center justify-center
                            ${viewMode === 'grid'
                              ? 'bg-crimson-600 text-white'
                              : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                            }`}
                  aria-label="Сетка"
                  title="Сетка"
                >
                  <Grid className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 sm:p-2 rounded-lg transition-colors flex items-center justify-center
                            ${viewMode === 'list'
                              ? 'bg-crimson-600 text-white'
                              : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                            }`}
                  aria-label="Список"
                  title="Список"
                >
                  <List className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Статистика фильтров (мобильная версия) */}
        {isMobile && (
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <div className="flex justify-between items-center text-xs text-gray-400">
              <span>
                Найдено: <span className="text-white font-medium">{sortedProducts.length}</span> товаров
              </span>
              <span>
                Категория: <span className="text-white font-medium">
                  {categories.find(c => c.id === selectedCategory)?.name || 'Все'}
                </span>
              </span>
            </div>
          </div>
        )}
      </motion.div>
      
      {/* Статистика (десктопная версия) */}
      {!isMobile && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6 sm:mb-8 flex justify-between items-center"
        >
          <div className="text-gray-400 text-sm sm:text-base">
            Найдено <span className="text-white font-bold">{sortedProducts.length}</span> товаров
            {selectedCategory !== 'all' && (
              <> в категории <span className="text-crimson-400 font-medium">
                {categories.find(c => c.id === selectedCategory)?.name}
              </span></>
            )}
          </div>
          <div className="text-gray-400 text-sm sm:text-base">
            Сортировка: <span className="text-white font-medium">
              {sortOptions.find(o => o.id === sortBy)?.name}
            </span>
          </div>
        </motion.div>
      )}
      
      {/* Продукты */}
      <div className="mb-8 sm:mb-12">
        {sortedProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 sm:py-16 md:py-20"
          >
            <div className="text-5xl sm:text-6xl mb-4">😔</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Товары не найдены</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Попробуйте выбрать другую категорию или сбросить фильтры
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all')
                setSortBy('newest')
              }}
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-gray-700 to-gray-800 
                       rounded-lg font-medium hover:from-gray-600 hover:to-gray-700 
                       transition-all text-sm sm:text-base"
            >
              Сбросить фильтры
            </button>
          </motion.div>
        ) : (
          <ProductGrid 
            products={sortedProducts} 
            viewMode={viewMode}
          />
        )}
      </div>
      
      {/* Информационные блоки */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 
                      border border-gray-700/50"
        >
          <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">{products.length}</div>
          <div className="text-gray-400 text-sm sm:text-base">Товаров в коллекции</div>
          <div className="mt-3 text-xs sm:text-sm text-gray-500">
            Каждый месяц добавляются новые модели
          </div>
        </div>
        
        <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 
                      border border-gray-700/50"
        >
          <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">100%</div>
          <div className="text-gray-400 text-sm sm:text-base">Оригинальный дизайн</div>
          <div className="mt-3 text-xs sm:text-sm text-gray-500">
            Уникальные модели, созданные нашими дизайнерами
          </div>
        </div>
        
        <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 
                      border border-gray-700/50"
        >
          <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">24/7</div>
          <div className="text-gray-400 text-sm sm:text-base">Поддержка клиентов</div>
          <div className="mt-3 text-xs sm:text-sm text-gray-500">
            Всегда готовы помочь с выбором и ответить на вопросы
          </div>
        </div>
      </motion.div>
      
      {/* Призыв к действию */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-gray-700/50 text-center"
      >
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
          Не нашли то, что искали?
        </h3>
        <p className="text-gray-400 mb-6 max-w-md mx-auto text-sm sm:text-base">
          Свяжитесь с нами, и мы поможем подобрать идеальный вариант
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 
                   bg-gradient-to-r from-crimson-600 to-crimson-700 text-white 
                   rounded-lg font-semibold hover:from-crimson-700 hover:to-crimson-800 
                   transition-all text-sm sm:text-base"
        >
          Написать нам
        </a>
      </motion.div>
    </motion.div>
  )
}