import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Truck, CreditCard, RefreshCw, FileText, Lock } from 'lucide-react'

export default function PoliciesPage() {
  const [activePolicy, setActivePolicy] = useState('privacy')

  const policies = {
    privacy: {
      title: "Политика конфиденциальности",
      icon: <Lock className="w-6 h-6" />,
      content: `
        <h3 class="text-xl font-bold mb-4">1. Сбор информации</h3>
        <p class="text-gray-300 mb-4">
          Мы собираем информацию, которую вы предоставляете при оформлении заказа, 
          регистрации на сайте или подписке на рассылку. Это может включать:
        </p>
        <ul class="list-disc pl-5 space-y-2 mb-4">
          <li class="text-gray-300">Имя и контактные данные</li>
          <li class="text-gray-300">Адрес доставки</li>
          <li class="text-gray-300">Историю заказов</li>
          <li class="text-gray-300">Предпочтения в товарах</li>
        </ul>

        <h3 class="text-xl font-bold mb-4">2. Использование информации</h3>
        <p class="text-gray-300 mb-4">
          Собранная информация используется исключительно для:
        </p>
        <ul class="list-disc pl-5 space-y-2 mb-4">
          <li class="text-gray-300">Обработки и выполнения ваших заказов</li>
          <li class="text-gray-300">Улучшения качества обслуживания</li>
          <li class="text-gray-300">Персонализации вашего опыта</li>
          <li class="text-gray-300">Отправки информации о новых коллекциях</li>
        </ul>

        <h3 class="text-xl font-bold mb-4">3. Защита данных</h3>
        <p class="text-gray-300 mb-4">
          Мы реализуем соответствующие меры безопасности для защиты вашей 
          личной информации от несанкционированного доступа, изменения, 
          раскрытия или уничтожения.
        </p>

        <h3 class="text-xl font-bold mb-4">4. Cookies</h3>
        <p class="text-gray-300 mb-4">
          Наш сайт использует файлы cookies для улучшения пользовательского 
          опыта. Вы можете отключить cookies в настройках браузера.
        </p>

        <h3 class="text-xl font-bold mb-4">5. Конфиденциальность</h3>
        <p class="text-gray-300">
          Мы не продаем, не обмениваем и не передаем ваши личные данные 
          третьим лицам без вашего согласия.
        </p>
      `
    },
    terms: {
      title: "Условия использования",
      icon: <FileText className="w-6 h-6" />,
      content: `
        <h3 class="text-xl font-bold mb-4">1. Принятие условий</h3>
        <p class="text-gray-300 mb-4">
          Используя сайт CARITAS, вы подтверждаете, что прочитали, поняли 
          и соглашаетесь соблюдать данные условия использования.
        </p>

        <h3 class="text-xl font-bold mb-4">2. Точность информации</h3>
        <p class="text-gray-300 mb-4">
          Мы стремимся обеспечить точность описаний и цен товаров, но 
          оставляем за собой право исправлять ошибки, неточности или упущения.
        </p>

        <h3 class="text-xl font-bold mb-4">3. Заказы</h3>
        <p class="text-gray-300 mb-4">
          Заказ считается принятым только после получения вами подтверждения 
          по email. Мы оставляем за собой право отказать в обработке заказа 
          при наличии на то оснований.
        </p>

        <h3 class="text-xl font-bold mb-4">4. Возвраты</h3>
        <p class="text-gray-300 mb-4">
          Вы можете вернуть товар в течение 30 дней с момента получения при 
          условии сохранения товарного вида, бирок и упаковки.
        </p>

        <h3 class="text-xl font-bold mb-4">5. Интеллектуальная собственность</h3>
        <p class="text-gray-300 mb-4">
          Все содержимое сайта, включая дизайн, текст, графику, логотипы и 
          изображения, защищено авторскими правами и является собственностью 
          CARITAS.
        </p>

        <h3 class="text-xl font-bold mb-4">6. Ограничение ответственности</h3>
        <p class="text-gray-300">
          CARITAS не несет ответственности за любые косвенные, случайные, 
          особые или последующие убытки, возникшие в результате использования 
          сайта или товаров.
        </p>
      `
    },
    shipping: {
      title: "Доставка",
      icon: <Truck className="w-6 h-6" />,
      content: `
        <h3 class="text-xl font-bold mb-4">1. Способы доставки</h3>
        <div class="space-y-4 mb-6">
          <div class="p-4 rounded-lg bg-gray-800">
            <h4 class="font-bold mb-2">Курьерская доставка</h4>
            <p class="text-gray-300 text-sm">
              • Срок: 1-2 рабочих дня<br/>
              • Стоимость: 300 ₽<br/>
              • Бесплатно при заказе от 5000 ₽
            </p>
          </div>
          <div class="p-4 rounded-lg bg-gray-800">
            <h4 class="font-bold mb-2">Самовывоз</h4>
            <p class="text-gray-300 text-sm">
              • Адрес: г. Москва, ул. Примерная, д. 123<br/>
              • Время: Пн-Пт 10:00-20:00<br/>
              • Бесплатно
            </p>
          </div>
          <div class="p-4 rounded-lg bg-gray-800">
            <h4 class="font-bold mb-2">Доставка по России</h4>
            <p class="text-gray-300 text-sm">
              • Срок: 3-7 рабочих дней<br/>
              • Стоимость: от 500 ₽<br/>
              • Точная стоимость рассчитывается при оформлении
            </p>
          </div>
        </div>

        <h3 class="text-xl font-bold mb-4">2. Сроки доставки</h3>
        <p class="text-gray-300 mb-4">
          Указанные сроки доставки являются ориентировочными и могут меняться 
          в зависимости от загруженности служб доставки, праздничных дней и 
          других факторов.
        </p>

        <h3 class="text-xl font-bold mb-4">3. Отслеживание заказа</h3>
        <p class="text-gray-300 mb-4">
          После отправки заказа мы вышлем вам трек-номер для отслеживания. 
          Вы сможете следить за статусом доставки через сайт службы доставки.
        </p>

        <h3 class="text-xl font-bold mb-4">4. Получение заказа</h3>
        <p class="text-gray-300">
          При получении заказа обязательно проверьте целостность упаковки и 
          соответствие товара заказу. В случае повреждений или несоответствий 
          отметьте это в накладной и свяжитесь с нами.
        </p>
      `
    },
    payment: {
      title: "Оплата",
      icon: <CreditCard className="w-6 h-6" />,
      content: `
        <h3 class="text-xl font-bold mb-4">1. Процесс оплаты</h3>
        <p class="text-gray-300 mb-4">
          <strong>ВАЖНО:</strong> Мы не принимаем оплату напрямую на сайте. 
          Процесс оплаты происходит следующим образом:
        </p>
        <ol class="list-decimal pl-5 space-y-3 mb-6">
          <li class="text-gray-300">
            Вы оформляете заказ через форму на сайте
          </li>
          <li class="text-gray-300">
            Наш менеджер связывается с вами для подтверждения заказа
          </li>
          <li class="text-gray-300">
            Мы высылаем вам счет с реквизитами для оплаты
          </li>
          <li class="text-gray-300">
            Вы оплачиваете заказ удобным способом
          </li>
          <li class="text-gray-300">
            Мы подтверждаем получение оплаты и отправляем заказ
          </li>
        </ol>

        <h3 class="text-xl font-bold mb-4">2. Способы оплаты</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="p-4 rounded-lg bg-gray-800">
            <h4 class="font-bold mb-2">Банковский перевод</h4>
            <p class="text-gray-300 text-sm">
              Оплата по счету на расчетный счет компании. Реквизиты высылаются 
              после подтверждения заказа.
            </p>
          </div>
          <div class="p-4 rounded-lg bg-gray-800">
            <h4 class="font-bold mb-2">Перевод по номеру телефона</h4>
            <p class="text-gray-300 text-sm">
              Удобный способ оплаты через СБП (Систему быстрых платежей) по 
              номеру телефона.
            </p>
          </div>
          <div class="p-4 rounded-lg bg-gray-800">
            <h4 class="font-bold mb-2">Наложенный платеж</h4>
            <p class="text-gray-300 text-sm">
              Оплата при получении заказа курьеру или в пункте выдачи.
            </p>
          </div>
          <div class="p-4 rounded-lg bg-gray-800">
            <h4 class="font-bold mb-2">Криптовалюты</h4>
            <p class="text-gray-300 text-sm">
              Возможна оплата в основных криптовалютах (Bitcoin, Ethereum, USDT).
            </p>
          </div>
        </div>

        <h3 class="text-xl font-bold mb-4">3. Подтверждение оплаты</h3>
        <p class="text-gray-300 mb-4">
          После совершения оплаты обязательно отправьте нам чек или скриншот 
          подтверждения. Это ускорит обработку вашего заказа.
        </p>

        <h3 class="text-xl font-bold mb-4">4. Безопасность</h3>
        <p class="text-gray-300">
          Все платежные операции защищены. Мы не храним данные ваших банковских 
          карт. Вся финансовая информация передается через защищенные каналы связи.
        </p>
      `
    },
    returns: {
      title: "Возврат и обмен",
      icon: <RefreshCw className="w-6 h-6" />,
      content: `
        <h3 class="text-xl font-bold mb-4">1. Условия возврата</h3>
        <p class="text-gray-300 mb-4">
          Вы можете вернуть или обменять товар в течение 30 дней с момента 
          получения. Для этого необходимо соблюсти следующие условия:
        </p>
        <ul class="list-disc pl-5 space-y-2 mb-6">
          <li class="text-gray-300">Товар не был в употреблении</li>
          <li class="text-gray-300">Сохранен товарный вид и все ярлыки</li>
          <li class="text-gray-300">Оригинальная упаковка не повреждена</li>
          <li class="text-gray-300">Имеется товарный или кассовый чек</li>
        </ul>

        <h3 class="text-xl font-bold mb-4">2. Что нельзя вернуть</h3>
        <p class="text-gray-300 mb-4">
          Не подлежат возврату и обмену товары:
        </p>
        <ul class="list-disc pl-5 space-y-2 mb-6">
          <li class="text-gray-300">Индивидуального пошива</li>
          <li class="text-gray-300">Сделанные под заказ</li>
          <li class="text-gray-300">Использованные или поврежденные</li>
          <li class="text-gray-300">Без оригинальной упаковки</li>
        </ul>

        <h3 class="text-xl font-bold mb-4">3. Процедура возврата</h3>
        <ol class="list-decimal pl-5 space-y-3 mb-6">
          <li class="text-gray-300">
            Свяжитесь с нами для получения разрешения на возврат
          </li>
          <li class="text-gray-300">
            Заполните форму возврата, которую мы вышлем вам
          </li>
          <li class="text-gray-300">
            Отправьте товар нам удобным способом
          </li>
          <li class="text-gray-300">
            После проверки товара мы вернем вам деньги
          </li>
        </ol>

        <h3 class="text-xl font-bold mb-4">4. Сроки возврата денег</h3>
        <p class="text-gray-300 mb-4">
          Возврат денежных средств осуществляется в течение 10 рабочих дней 
          с момента получения нами товара и его проверки.
        </p>

        <h3 class="text-xl font-bold mb-4">5. Стоимость доставки</h3>
        <p class="text-gray-300">
          Стоимость обратной доставки при возврате товара оплачивается 
          покупателем, за исключением случаев, когда возврат осуществляется 
          по вине продавца.
        </p>
      `
    }
  }

  const policyTabs = Object.entries(policies).map(([key, policy]) => ({
    id: key,
    title: policy.title,
    icon: policy.icon
  }))

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      {/* Hero */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-gray-100">ПОЛИТИКИ</span>
          <span className="text-gradient"> И УСЛОВИЯ</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto"
        >
          Вся информация о наших правилах, условиях и процессах
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Левая колонка - Навигация */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:w-1/3"
        >
          <div className="sticky top-24">
            <div className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 
                          border border-gray-700 p-6"
            >
              <h2 className="text-2xl font-bold mb-6">Навигация по политикам</h2>
              <div className="space-y-2">
                {policyTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActivePolicy(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg 
                              transition-all duration-300 text-left
                              ${activePolicy === tab.id 
                                ? 'bg-gradient-to-r from-crimson-600/20 to-crimson-700/20 border border-crimson-500/30 text-white' 
                                : 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white'
                              }`}
                  >
                    <div className={`${activePolicy === tab.id ? 'text-crimson-400' : 'text-gray-400'}`}>
                      {tab.icon}
                    </div>
                    <span className="font-medium">{tab.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Информационный блок */}
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-crimson-900/20 to-crimson-800/20 
                          border border-crimson-500/30 p-6"
            >
              <Shield className="w-8 h-8 text-crimson-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Ваша безопасность</h3>
              <p className="text-gray-300 text-sm">
                Мы гарантируем защиту ваших персональных данных и безопасность 
                всех транзакций. Все процессы соответствуют законодательству РФ.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Правая колонка - Контент */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="lg:w-2/3"
        >
          <div className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 
                        border border-gray-700 p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-gradient-to-r from-crimson-600/20 
                            to-crimson-700/20 text-crimson-400"
              >
                {policies[activePolicy].icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold">{policies[activePolicy].title}</h2>
                <p className="text-gray-400 text-sm mt-1">
                  Последнее обновление: 1 января 2024
                </p>
              </div>
            </div>

            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: policies[activePolicy].content }}
            />

            {/* Кнопки действий */}
            <div className="mt-12 pt-8 border-t border-gray-700 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-crimson-600 to-crimson-700 
                               text-white rounded-lg font-semibold hover:from-crimson-700 
                               hover:to-crimson-800 transition-all"
              >
                Распечатать политику
              </button>
              <button className="px-6 py-3 border-2 border-gray-600 text-gray-300 
                               rounded-lg font-semibold hover:border-crimson-500 
                               hover:text-crimson-400 transition-all"
              >
                Скачать PDF
              </button>
              <a 
                href="/contact"
                className="px-6 py-3 border-2 border-gray-600 text-gray-300 
                         rounded-lg font-semibold hover:border-crimson-500 
                         hover:text-crimson-400 transition-all inline-block"
              >
                Есть вопросы?
              </a>
            </div>
          </div>

          {/* Инфо-блоки */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 
                          border border-gray-700"
            >
              <h3 className="text-xl font-bold mb-3">Поддержка клиентов</h3>
              <p className="text-gray-400 text-sm mb-4">
                Если у вас есть вопросы о наших политиках, свяжитесь с нашей 
                службой поддержки.
              </p>
              <a 
                href="mailto:support@caritas.com"
                className="text-crimson-400 hover:text-crimson-300 font-medium"
              >
                support@caritas.com
              </a>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 
                          border border-gray-700"
            >
              <h3 className="text-xl font-bold mb-3">Изменения в политиках</h3>
              <p className="text-gray-400 text-sm">
                Мы можем периодически обновлять наши политики. Все изменения 
                будут опубликованы на этой странице.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}