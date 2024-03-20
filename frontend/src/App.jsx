import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'


function App() {

  return (
    <>      
      <BrowserRouter>
        <Navbar />
        <div>
          {/* <a href="https://vitejs.dev" target="_blank"> */}
            <img src={viteLogo} className="logo" alt="Vite logo" />
          {/* </a> */}
        </div>
        <h1>BetterHealth LDMS</h1>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={'#'} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
