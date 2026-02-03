import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
// Добавьте импорт
import { sendToTelegram } from '../utils/telegramBot'

// Обновите handleSubmit:
const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    // Отправка в Telegram
    await sendToTelegram(formData)
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', phone: '', message: '', orderDetails: '' })
    
    setTimeout(() => setIsSubmitted(false), 5000)
  } catch (error) {
    console.error('Error:', error)
    // Можно показать ошибку пользователю
    setIsSubmitting(false)
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    orderDetails: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Здесь будет отправка в Telegram бота
    // Пока просто имитируем
    setTimeout(() => {
      console.log('Form data:', formData)
      setIsSubmitted(true)
      setIsSubmitting(false)
      setFormData({ name: '', email: '', phone: '', message: '', orderDetails: '' })
      
      // Сбросить статус через 5 секунд
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "info@caritas.com",
      link: "mailto:info@caritas.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Телефон",
      info: "+7 (999) 123-45-67",
      link: "tel:+79991234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Адрес",
      info: "г. Москва, ул. Примерная, д. 123",
      link: "https://maps.google.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Часы работы",
      info: "Пн-Пт: 9:00-20:00\nСб-Вс: 10:00-18:00",
      link: null
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      {/* Hero */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-gray-100">КОНТАКТЫ</span>
          <span className="text-gradient"> И ЗАКАЗЫ</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto"
        >
          Свяжитесь с нами любым удобным способом. Мы всегда на связи!
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Левая колонка - Контакты */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Контактная информация</h2>
              <p className="text-gray-400 mb-8">
                Вы можете связаться с нами по телефону, email или через форму обратной связи.
                Мы ответим в течение 24 часов.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-r from-crimson-600/20 
                                to-crimson-700/20 text-crimson-400">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-400 hover:text-crimson-400 transition-colors"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-gray-400 whitespace-pre-line">{item.info}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Соцсети */}
            <div className="pt-8 border-t border-gray-700">
              <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                {['Instagram', 'Telegram', 'VK', 'YouTube'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 
                             text-gray-300 hover:text-white transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Правая колонка - Форма */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 
                        border border-gray-700 p-8"
          >
            <h2 className="text-3xl font-bold mb-2">Форма заказа</h2>
            <p className="text-gray-400 mb-8">
              Заполните форму, и мы свяжемся с вами для уточнения деталей заказа и оплаты.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Заявка отправлена!</h3>
                <p className="text-gray-400 mb-6">
                  Мы свяжемся с вами в ближайшее время для уточнения деталей заказа.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 border-2 border-crimson-500 text-crimson-400 
                           rounded-lg font-semibold hover:bg-crimson-500/10 
                           transition-colors"
                >
                  Отправить новую заявку
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2">Имя *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 
                             text-white placeholder-gray-500 focus:outline-none 
                             focus:border-crimson-500 transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 
                               text-white placeholder-gray-500 focus:outline-none 
                               focus:border-crimson-500 transition-colors"
                      placeholder="example@mail.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">Телефон</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 
                               text-white placeholder-gray-500 focus:outline-none 
                               focus:border-crimson-500 transition-colors"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">
                    Детали заказа (номера товаров, размеры, количество)
                  </label>
                  <textarea
                    name="orderDetails"
                    value={formData.orderDetails}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 
                             text-white placeholder-gray-500 focus:outline-none 
                             focus:border-crimson-500 transition-colors resize-none"
                    placeholder="Например: Худи 'Midnight' (M) - 1 шт, Куртка 'Shadow' (L) - 1 шт"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Сообщение</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 
                             text-white placeholder-gray-500 focus:outline-none 
                             focus:border-crimson-500 transition-colors resize-none"
                    placeholder="Дополнительные пожелания или вопросы..."
                  />
                </div>

                <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-700">
                  <p className="text-sm text-gray-400">
                    * После отправки формы мы свяжемся с вами для подтверждения заказа 
                    и обсуждения способа оплаты. Оплата осуществляется по согласованию 
                    (картой, переводом или наличными при получении).
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 btn-primary py-4 
                           disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white 
                                   rounded-full animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      Отправить заявку
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      {/* Карта */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-16 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 
                  border border-gray-700 p-8"
      >
        <h2 className="text-3xl font-bold mb-6">Как нас найти</h2>
        <div className="h-64 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 
                      flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl font-bold text-gray-700 mb-4">📍</div>
            <p className="text-gray-400">Карта расположения нашего шоурума</p>
            <p className="text-gray-500 text-sm mt-2">
              г. Москва, ул. Примерная, д. 123
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}