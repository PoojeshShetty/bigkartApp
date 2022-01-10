import React from 'react'
import { Link } from 'react-router-dom'
import SignInNav from './SignInNav'
import SignoutNav from './SignoutNav'
import './Navbar.css'
import { useAuth } from '../../hooks/useAuth'
import AdminNav from './AdminNav'

function Navbar() {

    const {user} = useAuth()

    return (
        <nav className="navbar">
            <ul className="navbar__items">

                <Link to="/home" className='logo'>
                        <li className="navbar__item">
                            <div className="logo_icon">
                                
                            </div>
                            <span className="logo__txt">
                                Bigkart
                            </span>
                        </li>
                </Link>

                {
                    !user ?
                    <SignoutNav />
                    :
                    user.type === 'admin' ?
                    <AdminNav />
                    :
                    <SignInNav />    
                }
                
            </ul>
        </nav>
    )
}

export default Navbar
