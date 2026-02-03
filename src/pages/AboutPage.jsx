import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Globe, Heart } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Качество",
      description: "Используем только премиальные материалы и обеспечиваем ручную проверку каждого изделия."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Сообщество",
      description: "CARITAS — это не просто бренд, это сообщество единомышленников."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Этика",
      description: "Ответственное производство и поддержка локальных мануфактур."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Страсть",
      description: "В каждой коллекции — наша страсть к дизайну и вниманию к деталям."
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-gray-100">О БРЕНДЕ</span>
          <span className="text-gradient"> CARITAS</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto"
        >
          CARITAS — это философия минимализма, качества и уникального стиля
        </motion.p>
      </div>

      {/* История */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Наша История</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Основанный в 2020 году, CARITAS начал свой путь как небольшая мастерская,
                создающая уникальные вещи для друзей и близких. Сегодня мы выросли в
                международный бренд, сохраняя при этом душу и подход небольшой мастерской.
              </p>
              <p>
                Наше название — CARITAS — происходит от латинского слова, означающего
                "любовь", "забота", "благотворительность". Именно эти ценности лежат
                в основе всего, что мы делаем.
              </p>
              <p>
                Каждая коллекция — это результат месяцев работы, экспериментов с материалами
                и поиска идеального баланса между формой и функцией.
              </p>
            </div>
          </div>
          <div className="h-96 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 
                        border border-gray-700 flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl font-bold text-crimson-600/20 mb-4">C</div>
              <div className="text-2xl text-crimson-400">Est. 2020</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Ценности */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Наши Ценности</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 
                        border border-gray-700 text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-crimson-600/20 
                            to-crimson-700/20 mb-6 text-crimson-400">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Процесс */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 
                  border border-gray-700 p-8 md:p-12"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Наш Процесс</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-crimson-400 mb-4">01</div>
            <h3 className="text-xl font-bold mb-3">Дизайн</h3>
            <p className="text-gray-400">
              Каждая модель проходит через десятки эскизов и прототипов перед тем,
              как попасть в производство.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-crimson-400 mb-4">02</div>
            <h3 className="text-xl font-bold mb-3">Материалы</h3>
            <p className="text-gray-400">
              Тщательно отбираем материалы, тестируем их на прочность, комфорт и эстетику.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-crimson-400 mb-4">03</div>
            <h3 className="text-xl font-bold mb-3">Качество</h3>
            <p className="text-gray-400">
              Каждое изделие проходит ручную проверку перед отправкой покупателю.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}