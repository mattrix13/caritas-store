export function convertPrice(priceInUSD, currency, rates) {
  if (!rates || currency === 'USD') return priceInUSD
  const rate = rates[currency]
  if (!rate) return priceInUSD
  return priceInUSD * rate
}

export function formatPrice(amount, currency) {
  const options = {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }
  
  // Для BYN нет встроенной поддержки, обрабатываем отдельно
  if (currency === 'BYN') {
    return `${amount.toFixed(2)} Br`
  }
  
  try {
    return new Intl.NumberFormat(getLocale(currency), options).format(amount)
  } catch (e) {
    return `${getCurrencySymbol(currency)}${amount.toFixed(2)}`
  }
}

export function getCurrencySymbol(currency) {
  const symbols = {
    'USD': '$',
    'RUB': '₽',
    'BYN': 'Br'
  }
  return symbols[currency] || '$'
}

export function getLocale(currency) {
  const locales = {
    'USD': 'en-US',
    'RUB': 'ru-RU',
    'BYN': 'ru-RU'
  }
  return locales[currency] || 'en-US'
}

// Конвертация без умножения - основная фишка!
export function calculateDisplayPrice(basePriceUSD, currency, rates) {
  // Если это USD, возвращаем как есть
  if (currency === 'USD') {
    return {
      amount: basePriceUSD,
      formatted: formatPrice(basePriceUSD, 'USD'),
      symbol: '$'
    }
  }
  
  // Если нет rates, возвращаем заглушку
  if (!rates || !rates[currency]) {
    return {
      amount: basePriceUSD,
      formatted: `~${getCurrencySymbol(currency)}${(basePriceUSD * 1).toFixed(2)}`,
      symbol: getCurrencySymbol(currency)
    }
  }
  
  // Конвертируем один раз
  const converted = basePriceUSD * rates[currency]
  
  return {
    amount: converted,
    formatted: formatPrice(converted, currency),
    symbol: getCurrencySymbol(currency)
  }
}