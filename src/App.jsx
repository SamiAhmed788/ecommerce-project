import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import Cart from './pages/cart'
import Login from './pages/product'
import Product from './pages/product'
import ProductList from './pages/productlist'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/products'
import Register from './pages/register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            <Router>
    <Routes>
                <Route path="/" element={<Home key={Date.now()} type="random" />} />
                <Route path="/Cart" element={<Cart key={Date.now()} type="trend" />} />
                <Route path="/product" element={<Product key={Date.now()} type="sub" />} />
                <Route path="/productlist" element={<ProductList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<div>Page Not Found</div>} /> {/* Optional: catch-all route */}
              </Routes>
              </Router>
 
    </>
  )
}

export default App
