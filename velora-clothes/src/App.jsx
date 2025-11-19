import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ProductsGrid from './components/ProductsGrid'
import { Promobanner } from './components/Promobanner'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className='min-h-screen bg-black'>
      <Header />
      <Hero />
      <About />
      <ProductsGrid />
      <Promobanner />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App