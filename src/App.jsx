import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header/Header'
import CartSidebar from './components/Header/CartSidebar'
import CartProvider from './components/Cart/CartProvider'
import CurrencyProvider from './components/Currency/CurrencyProvider'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PoliciesPage from './pages/PoliciesPage'
import Footer from './components/Footer'

function App() {
  const location = useLocation()
  
  return (
    <CurrencyProvider>
      <CartProvider>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <Header />
          <CartSidebar />
          
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/policies" element={<PoliciesPage />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </CartProvider>
    </CurrencyProvider>
  )
}

export default App