export const translations = {
  ru: {
    // Общие
    'cart': 'Корзина',
    'shop': 'Магазин',
    'products': 'Товары',
    'categories': 'Категории',
    'size': 'Размер',
    'quantity': 'Количество',
    'addToCart': 'Добавить в корзину',
    'buyNow': 'Купить сейчас',
    'description': 'Описание',
    'features': 'Характеристики',
    'total': 'Итого',
    'checkout': 'Оформить заказ',
    'continueShopping': 'Продолжить покупки',
    'emptyCart': 'Корзина пуста',
    'freeShipping': 'Бесплатная доставка',
    'securePayment': 'Безопасная оплата',
    'returns': 'Возвраты',
    
    // Фильтры
    'all': 'Все товары',
    'hoodies': 'Худи',
    'tshirts': 'Футболки',
    'pants': 'Штаны',
    'jackets': 'Куртки',
    'accessories': 'Аксессуары',
    'newest': 'Сначала новые',
    'priceLow': 'Цена: по возрастанию',
    'priceHigh': 'Цена: по убыванию',
    
    // Уведомления
    'addedToCart': 'Товар добавлен в корзину',
    'removedFromCart': 'Товар удален из корзины',
    'cartCleared': 'Корзина очищена'
  },
  eu: {
    // Common
    'cart': 'Cart',
    'shop': 'Shop',
    'products': 'Products',
    'categories': 'Categories',
    'size': 'Size',
    'quantity': 'Quantity',
    'addToCart': 'Add to Cart',
    'buyNow': 'Buy Now',
    'description': 'Description',
    'features': 'Features',
    'total': 'Total',
    'checkout': 'Checkout',
    'continueShopping': 'Continue Shopping',
    'emptyCart': 'Cart is Empty',
    'freeShipping': 'Free Shipping',
    'securePayment': 'Secure Payment',
    'returns': 'Returns',
    
    // Filters
    'all': 'All Products',
    'hoodies': 'Hoodies',
    'tshirts': 'T-shirts',
    'pants': 'Pants',
    'jackets': 'Jackets',
    'accessories': 'Accessories',
    'newest': 'Newest First',
    'priceLow': 'Price: Low to High',
    'priceHigh': 'Price: High to Low',
    
    // Notifications
    'addedToCart': 'Product added to cart',
    'removedFromCart': 'Product removed from cart',
    'cartCleared': 'Cart cleared'
  }
}

export function getTranslation(key, language = 'ru') {
  const langData = translations[language] || translations.ru
  return langData[key] || key
}