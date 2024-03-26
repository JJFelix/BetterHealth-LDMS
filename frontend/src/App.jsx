import { useState } from 'react'
import viteLogo from '/logo.png'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cardio from './pages/Cardio'
import Stroke from './pages/Stroke'
import Cancer from './pages/Cancer'
import Diabetes from './pages/Diabetes'
import About from './pages/About'
import Services from './pages/Services'


function App() {

  return (
    <>      
      <BrowserRouter>
        <Navbar />
        <div className="d-flex justify-content-center align-items-center">
          <div>
            {/* <a href="https://vitejs.dev" target="_blank"> */}
              <img src={viteLogo} className="logo" alt="Vite logo" />
            {/* </a> */}
          </div>
          <h1>BetterHealth LDMS</h1>
        </div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={'#'} />
          <Route path='/register' element={'#'} />
          <Route path='/logout' element={'#'} />

          <Route path='/cardio' element={<Cardio />} />
          <Route path='/stroke' element={<Stroke />} />
          <Route path='/cancer' element={<Cancer />} />
          <Route path='/diabetes' element={<Diabetes />} />

          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
