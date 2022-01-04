import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar__items">

                <Link to="/cart" className='logo'>
                        <li className="navbar__item">
                            <div className="logo_icon">
                                
                            </div>
                            <span className="logo__txt">
                                Bigkart
                            </span>
                        </li>
                </Link>
                <Link to="/login">
                    <li className="navbar__item">
                        <div className="navbar__itemIcn">
                                Login
                        </div>
                    </li>
                </Link>
                <Link to="/signup">
                    <li className="navbar__item">
                        <div className="navbar__itemIcn">
                                Signup
                        </div>
                    </li>
                </Link>
                <Link to="/logout">
                    <li className="navbar__item">
                        <div className="navbar__itemIcn">
                                Logout
                        </div>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
