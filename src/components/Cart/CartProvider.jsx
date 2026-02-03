import React, { createContext, useContext, useState, useEffect } from 'react'
import { useCurrency } from '../Currency/CurrencyProvider'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('caritas-cart')
    return saved ? JSON.parse(saved) : []
  })
  
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { format, getSymbol } = useCurrency()
  
  // Сохраняем корзину при изменении
  useEffect(() => {
    localStorage.setItem('caritas-cart', JSON.stringify(cart))
  }, [cart])
  
  const addToCart = (product, size = 'M') => {
    setCart(prev => {
      const existingItem = prev.find(item => 
        item.id === product.id && item.size === size
      )
      
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        size,
        image: product.image,
        quantity: 1
      }]
    })
  }
  
  const removeFromCart = (itemId, size) => {
    setCart(prev => prev.filter(item => 
      !(item.id === itemId && item.size === size)
    ))
  }
  
  const updateQuantity = (itemId, size, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId, size)
      return
    }
    
    setCart(prev => prev.map(item =>
      item.id === itemId && item.size === size
        ? { ...item, quantity: newQuantity }
        : item
    ))
  }
  
  const clearCart = () => {
    setCart([])
  }
  
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }
  
  const getFormattedTotal = () => {
    return format(getCartTotal())
  }
  
  const getItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }
  
  const value = {
    cart,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getFormattedTotal,
    getItemCount
  }
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}