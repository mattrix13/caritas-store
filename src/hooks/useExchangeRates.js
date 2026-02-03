import { useState, useEffect } from 'react'

export function useExchangeRates() {
  const [rates, setRates] = useState({
    USD: 1,
    RUB: 90,
    BYN: 3.2
  })
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true)
        // Можно использовать любой API для курсов
        // const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
        // const data = await response.json()
        // setRates({ USD: 1, RUB: data.rates.RUB, BYN: data.rates.BYN })
        
        // Для демо используем фиксированные значения
        setRates({
          USD: 1,
          RUB: 90,
          BYN: 3.2
        })
      } catch (error) {
        console.error('Error fetching rates:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchRates()
  }, [])
  
  return { rates, loading }
}