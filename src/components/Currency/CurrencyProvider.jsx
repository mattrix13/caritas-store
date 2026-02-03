import React, { createContext, useContext, useState, useEffect } from 'react'
import { useExchangeRates } from '../../hooks/useExchangeRates'

const CurrencyContext = createContext()

export const useCurrency = () => useContext(CurrencyContext)

export default function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem('caritas-currency') || 'USD'
  })
  
  const { rates, loading } = useExchangeRates()
  
  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency)
    localStorage.setItem('caritas-currency', newCurrency)
  }
  
  const convert = (priceInUSD) => {
    if (!rates || currency === 'USD') return priceInUSD
    return priceInUSD * (rates[currency] || 1)
  }
  
  const format = (priceInUSD) => {
    const converted = convert(priceInUSD)
    const formatter = new Intl.NumberFormat(currency === 'RUB' ? 'ru-RU' : 'en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2
    })
    
    if (currency === 'BYN') {
      return `${converted.toFixed(2)} Br`
    }
    
    try {
      return formatter.format(converted)
    } catch (e) {
      const symbols = { USD: '$', RUB: '₽', BYN: 'Br' }
      return `${symbols[currency] || '$'}${converted.toFixed(2)}`
    }
  }
  
  const getSymbol = () => {
    const symbols = { USD: '$', RUB: '₽', BYN: 'Br' }
    return symbols[currency] || '$'
  }
  
  const value = {
    currency,
    rates,
    loading,
    changeCurrency,
    convert,
    format,
    getSymbol
  }
  
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  )
}