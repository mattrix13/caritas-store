export const products = [
  {
    id: 1,
    name: "Essential Hoodie Black",
    category: "hoodies",
    price: 89.99, // Цена в USD
    originalPrice: 119.99,
    image: "hoodie1.jpg",
    description: "Базовое черное худи премиум-качества. Изготовлено из 100% органического хлопка с плотностью 400 г/м². Идеально для повседневной носки.",
    features: [
      "100% органический хлопок",
      "Плотность 400 г/м²",
      "Ребристые манжеты и подол",
      "Кенгуру-карман",
      "Усиленные швы"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["black"],
    inStock: true,
    tags: ["new", "bestseller"],
    sku: "CE-HD-BLK-001"
  },
  {
    id: 2,
    name: "Oversized Hoodie Gray",
    category: "hoodies",
    price: 94.99,
    image: "hoodie2.jpg",
    description: "Оверсайз худи в сером цвете. Свободный крой для максимального комфорта. Идеально для уличного стиля.",
    features: [
      "Премиум хлопок",
      "Оверсайз крой",
      "Капюшон с регулировкой",
      "Внутренняя отделка флисом",
      "Сделано в Италии"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["gray"],
    inStock: true,
    tags: ["oversized"],
    sku: "CE-HD-GRY-002"
  },
  {
    id: 3,
    name: "Minimal Tee White",
    category: "tshirts",
    price: 39.99,
    originalPrice: 49.99,
    image: "tshirt1.jpg",
    description: "Минималистичная белая футболка. Основной элемент любого гардероба. Выполнена из мягкого египетского хлопка.",
    features: [
      "Египетский хлопок",
      "Плоские швы",
      "Круглая горловина",
      "Экологичная упаковка",
      "Лимитированный выпуск"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["white"],
    inStock: true,
    tags: ["minimal", "essential"],
    sku: "CE-TE-WHT-003"
  },
  {
    id: 4,
    name: "Cargo Pants Black",
    category: "pants",
    price: 129.99,
    image: "pants1.jpg",
    description: "Технические карго-штаны из прочной ткани. Множество функциональных карманов. Идеально для городской среды.",
    features: [
      "Техническая ткань",
      "Водоотталкивающая пропитка",
      "6 карманов",
      "Регулируемая талия",
      "Усиленные колени"
    ],
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["black"],
    inStock: true,
    tags: ["cargo", "technical"],
    sku: "CE-PT-BLK-004"
  },
  {
    id: 5,
    name: "Logo Cap Black",
    category: "accessories",
    price: 34.99,
    image: "cap1.jpg",
    description: "Бейсболка с вышитым логотипом CARITAS. Изготовлена из премиальных материалов.",
    features: [
      "Шерсть/хлопок",
      "Вышитый логотип",
      "Регулируемая застежка",
      "УФ-защита",
      "Ручная работа"
    ],
    sizes: ["One Size"],
    colors: ["black"],
    inStock: true,
    tags: ["accessory", "new"],
    sku: "CE-CP-BLK-005"
  },
  {
    id: 6,
    name: "Tech Jacket Gray",
    category: "jackets",
    price: 189.99,
    originalPrice: 249.99,
    image: "jacket1.jpg",
    description: "Техническая куртка с водонепроницаемой мембраной. Идеальна для городских условий и активного отдыха.",
    features: [
      "GORE-TEX мембрана",
      "Водонепроницаемая",
      "Дышащая ткань",
      "Съемный капюшон",
      "Множество карманов"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["gray"],
    inStock: true,
    tags: ["technical", "waterproof"],
    sku: "CE-JK-GRY-006"
  }
]

export const getProductById = (id) => {
  return products.find(product => product.id === id)
}

export const getProductsByCategory = (category) => {
  if (category === 'all') return products
  return products.filter(product => product.category === category)
}