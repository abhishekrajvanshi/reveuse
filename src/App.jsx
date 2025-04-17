import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'

const App = () => {
  return (
    <BrowserRouter>

    <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>

      <h1>Footer</h1>
    </BrowserRouter>
  )
}

export default App
