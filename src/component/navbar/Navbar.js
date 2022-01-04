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
                <Link to="/cart">
                    <li className="navbar__item">
                        <div className="navbar__itemIcn">
                                Cart
                        </div>
                    </li>
                </Link>
                <Link to="/wishlist">
                    <li className="navbar__item">
                        <div className="navbar__itemIcn">
                                Cart
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
