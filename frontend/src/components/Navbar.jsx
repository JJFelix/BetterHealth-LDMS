import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../slices/auth'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)
    const userType = useSelector((state)=>state.auth.userType)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () =>{
        dispatch(logoutUser())
        navigate("/about")
    }
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

            {
                isAuthenticated ? 
                    <div className='d-flex gap-2' >
                        {
                            userType == "PATIENT" ?
                                <Link className='btn btn-primary' to={"/patient/manage-access"}>Manage Access</Link>
                            :null
                        }
                        <button className='btn btn-warning' onClick={logout}>Logout</button>
                    </div>
                :
                    <div className='d-flex gap-2' >
                        <Link className='btn btn-primary' to={'/register'}>Register</Link>
                        <Link className='btn btn-primary' to={'/login'}>Login</Link>
                    </div>
            }
            
        </nav>
    </div>
  )
}

export default Navbar