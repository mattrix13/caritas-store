import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Shield, Truck, Award } from 'lucide-react'
import ProductGrid from '../components/Product/ProductGrid'
import { products } from '../data/products'

export default function HomePage() {
  const featuredProducts = products.slice(0, 4)
  
  const features = [
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Премиум качество",
      description: "Используем только лучшие материалы и обеспечиваем ручную проверку каждого изделия."
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Эксклюзивный дизайн",
      description: "Ограниченные выпуски. Каждая коллекция — уникальное произведение искусства."
    },
    {
      icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Быстрая доставка",
      description: "Доставляем по всему миру. Бесплатная доставка при заказе от $100."
    }
  ]
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
          <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-64 sm:h-64 rounded-full 
                        bg-gradient-to-r from-crimson-600/10 to-transparent blur-2xl sm:blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 rounded-full 
                        bg-gradient-to-tl from-crimson-600/5 to-transparent blur-2xl sm:blur-3xl 
                        animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full 
                       bg-gradient-to-r from-crimson-600/20 to-crimson-700/20 
                       border border-crimson-500/30 mb-6 sm:mb-8"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-crimson-400" />
              <span className="text-crimson-300 font-medium text-xs sm:text-sm">
                Новая коллекция 2024
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6"
            >
              <span className="block text-gray-100">CARITAS</span>
              <span className="text-gradient">STREETWEAR</span>
            </motion.h1>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed"
            >
              Премиальная одежда для тех, кто ценит минимализм, качество 
              и уникальный стиль. Ограниченные выпуски исключительно для вас.
            </motion.p>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-4"
            >
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 btn-primary px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg"
              >
                Смотреть коллекцию
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </Link>
              
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 btn-secondary px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg"
              >
                О бренде
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-crimson-500/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1.5 sm:w-1 sm:h-2 bg-crimson-500 rounded-full mt-1.5 sm:mt-2"
            />
          </div>
        </motion.div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16"
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 
                          border border-gray-700/50 text-center"
              >
                <div className="inline-flex p-2 sm:p-3 md:p-4 rounded-full bg-gradient-to-r from-crimson-600/20 
                              to-crimson-700/20 mb-3 sm:mb-4 md:mb-6"
                >
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
          
          {/* Featured Products */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                <span className="text-gray-100">Избранные</span>
                <span className="text-gradient"> товары</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
                Самые популярные товары этой недели
              </p>
            </div>
            
            <ProductGrid products={featuredProducts} />
            
            <div className="text-center mt-8 sm:mt-12">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg btn-secondary"
              >
                Смотреть все товары
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
                      from-crimson-600/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-3xl mx-auto text-center p-6 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl md:rounded-3xl 
                     bg-gradient-to-br from-gray-800/50 to-gray-900/50 
                     border border-gray-700/50 backdrop-blur-sm"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Присоединяйтесь к CARITAS
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-xl px-2">
              Получайте эксклюзивные предложения, ранний доступ к новым коллекциям 
              и специальные скидки для подписчиков.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-lg bg-gray-900 border border-gray-700 
                         text-white placeholder-gray-500 focus:outline-none text-sm sm:text-base md:text-base
                         focus:border-crimson-500"
              />
              <button className="px-4 sm:px-5 md:px-8 py-2.5 sm:py-3 md:py-4 btn-primary font-semibold text-sm sm:text-base md:text-base">
                Подписаться
              </button>
            </div>
            
            <p className="text-gray-400 text-xs sm:text-sm mt-4 sm:mt-6">
              Отправляя email, вы соглашаетесь с нашей{" "}
              <Link to="/policies" className="text-crimson-400 hover:text-crimson-300 underline">
                Политикой конфиденциальности
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}