import {Link} from 'react-router-dom'
import { useCartContext } from '../../hooks/useCartContext'

function SignInNav() {

    const {cart, wishlist} = useCartContext()

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

                <Link to="/logout">
                    <li className="navbar__item">
                        <div className="navbar__itemIcn">
                                Logout
                        </div>
                    </li>
                </Link>
        </>
    )
}

export default SignInNav
