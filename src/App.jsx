import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// components 
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import News from './components/News'
import Stock from './components/Stock'
import Delivery from './components/Delivery'
import Footer from './components/Footer'
import Loader from './components/Loader'

// pages
const Pizza = React.lazy(() => import('./pages/Pizza'))
const Drink = React.lazy(() => import('./pages/Drink'));
const Paste = React.lazy(() => import('./pages/Paste'));
const Salads = React.lazy(() => import('./pages/Salads'));
const Soups = React.lazy(() => import('./pages/Soups'));
const Contact = React.lazy(() => import('./pages/Contact'));
const StockPage = React.lazy(() => import('./pages/StockPage'));

const App = () => {

  const Home = () => {
    return (
      <>
        <Hero />
        <News />
        <Pizza />
        <Stock />
        <Delivery />
      </>
    )
  }

  return (
    <>
      <Navbar />

      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/stock' element={<StockPage />} />
            <Route path='/pizza' element={<Pizza />} />
            <Route path='/drink' element={<Drink />} />
            <Route path='/paste' element={<Paste />} />
            <Route path='/salad' element={<Salads />} />
            <Route path='/soups' element={<Soups />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Suspense>
      </main>


      <Footer />
    </>
  )
}

export default App