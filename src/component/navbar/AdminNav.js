import React from 'react'
import {Link} from 'react-router-dom'
import useLogout from '../../hooks/useLogout'

function AdminNav() {
    
    const {logout} = useLogout()

    return (
        <>
            
            <Link to="/admin/products">
                <li className="navbar__item">
                    <div className="navbar__itemIcn notify__show">
                            Products
                    </div>
                </li>
            </Link>
            
            <Link to="/admin/addproduct">
                <li className="navbar__item">
                    <div className="navbar__itemIcn notify__show">
                            Add Product
                    </div>
                </li>
            </Link>

            <button 
                onClick={logout}
                className="btn btn--black">
                Logout
                
            </button>
        </>
    )
}

export default AdminNav
