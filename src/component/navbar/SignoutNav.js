import {Link} from 'react-router-dom'

function SignoutNav() {
    return (
        <>
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
        </>
    )
}

export default SignoutNav
