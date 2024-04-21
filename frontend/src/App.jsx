import { useState } from 'react'
import viteLogo from '/logo.png'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PatientHome from './pages/patient/PatientHome'
import DoctorHome from './pages/doctor/DoctorHome'
import Cardio from './pages/doctor/Cardio'
import Stroke from './pages/doctor/Stroke'
import Cancer from './pages/doctor/Cancer'
import Diabetes from './pages/doctor/Diabetes'
import About from './pages/About'
import Services from './pages/Services'
import Results from './pages/Results'
import Register from './pages/Register'
import Login from './pages/Login'
import CreateProfile from './pages/CreateProfile'
import PatientManageDataAccess from './pages/patient/ManageAccess'
import RecommenadtionResults from './pages/doctor/results'

function App() {

  return (
    <>      
      <BrowserRouter>
        <Navbar />
        {/* <div className="d-flex justify-content-center align-items-center">
          <div>
              <img src={viteLogo} className="logo" alt="Vite logo" />
          </div>
          <h1>BetterHealth LDMS</h1>
        </div> */}
        <Routes>
          <Route exact path='/' element={<PatientHome />}/>
          <Route exact path='/patient' element={<PatientHome/>}/>
          <Route path='/doctor' element={<DoctorHome/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/logout' element={'#'} />

          <Route path='/cardio' element={<Cardio />} />          
          <Route path='/stroke' element={<Stroke />} />
          <Route path='/cancer' element={<Cancer />} />
          <Route path='/diabetes' element={<Diabetes />} />

          <Route path='/results' element={<Results />} />

          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/create-profile' element={<CreateProfile />} />
          <Route exact path="/patient/manage-access" element={<PatientManageDataAccess/>}/>
          <Route exact path='/recommendation-results' element={<RecommenadtionResults/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
