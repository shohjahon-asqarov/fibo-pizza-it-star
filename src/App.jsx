import React, { Suspense, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

// components 
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import News from './components/News'
import Stock from './components/Stock'
import Delivery from './components/Delivery'
import Footer from './components/Footer'
import Loader from './components/Loader'

// pages
const Card = React.lazy(() => import('./pages/Card'))
const Pizza = React.lazy(() => import('./pages/Pizza'));
const Drink = React.lazy(() => import('./pages/Drink'));
const Paste = React.lazy(() => import('./pages/Paste'));
const Salads = React.lazy(() => import('./pages/Salads'));
const Soups = React.lazy(() => import('./pages/Soups'));
const Contact = React.lazy(() => import('./pages/Contact'));
const StockPage = React.lazy(() => import('./pages/StockPage'));
const Favourite = React.lazy(() => import('./pages/Favourite'));


import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// Modal
import { Modal } from 'antd';
import ModalCard from './components/ModalCard'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from './store/slices/modalSlice'
import StockDetail from './pages/StockDetail'


// aos scroll animation
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    AOS.init()
  }, [])

  const modalProduct = useSelector((store) => store.modal.data)
  const isModalOpen = useSelector((store) => store.modal.isOpen)

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
            <Route path='/stock/:id' element={<StockDetail />} />
            <Route path='/pizza' element={<Pizza />} />
            <Route path='/drink' element={<Drink />} />
            <Route path='/paste' element={<Paste />} />
            <Route path='/salad' element={<Salads />} />
            <Route path='/soups' element={<Soups />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/card' element={<Card />} />
            <Route path='/favourite' element={<Favourite />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <ToastContainer />

      <Modal footer={null} className='!w-[450px]' title={modalProduct.category} open={isModalOpen} onCancel={() => dispatch(closeModal())}>
        <ModalCard product={modalProduct} />
      </Modal>
    </>
  )
}

export default App