import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-dark bg-dark  my-nav ">
        {/* navbar-dark bg-dark */}
            {/* <a className="navbar-brand"></a> */}
            {/* BetterHealth LDMS */}
            {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className='d-flex gap-4 align-items-center'>
                <img className="rounded-circle" src="https://picsum.photos/50" alt="" />
                <a
                    className='text-white'
                    href='/'
                >
                    Welcome, Dr. Strange
                </a>
            </div>

            <div className="d-flex gap-3">
                <Link className='text-white' to={'/'}>Home</Link>
                <Link className='text-white' to={'/about'}>About Us</Link>
                <Link className='text-white' to={'/services'}>Services</Link>
            </div>          

            <div className='d-flex gap-2' >
                <button className='btn btn-primary'>Register</button>
                <button className='btn btn-primary'>Login</button>
                <button className='btn btn-warning'>Logout</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar