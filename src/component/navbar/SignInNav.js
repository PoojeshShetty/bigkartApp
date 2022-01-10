import {Link} from 'react-router-dom'
import { useCartContext } from '../../hooks/useCartContext'
import useLogout from '../../hooks/useLogout'

function SignInNav() {

    const {cart, wishlist} = useCartContext()
    
    const {logout} = useLogout()
    
    return (
        <>
                <Link to="/cart">
                    <li className="navbar__item">
                        <div className="navbar__itemIcn notify__show">
                                Cart
                                {cart.length>0 &&
                                 <span className='notify__length'>{cart.length}</span>}
                        </div>
                    </li>
                </Link>

                <Link to="/wishlist">
                    <li className="navbar__item">
                        <div className="navbar__itemIcn notify__show">
                                Wishlist
                                {wishlist.length>0 &&
                                 <span className='notify__length'>{wishlist.length}</span>}
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

export default SignInNav
