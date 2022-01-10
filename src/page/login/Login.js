import {useState} from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin'
import './Login.css'

function Login() {

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error} = useLogin()
    
    const handleLogin = (e) => {
        e.preventDefault()

        login(email,password)
    }
    return (
        <div className="login__container">
            <form className="login__form" onSubmit={(e) => handleLogin(e)}>

                <span className="form__title">
                    Login
                </span>

                {
                    error && 
                        <div className="error--msg">
                            {error}
                        </div>
                }

                <div className="form__control">
                    <label>
                        Email
                    </label>
                    <input 
                        type="email" 
                        placeholder='Email'
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                        required
                    />
                </div>

                <div className="form__control">
                    <label>
                        Password
                    </label>
                    <input 
                        type="password" 
                        placeholder='Password'
                        value={password}
                        onChange={({target}) => setPassword(target.value)}
                        required
                    />
                </div>

                <div className="form__btncl">
                    <button className="btn btn--black">Login</button>
                    <button className="btn btn--black btn--guest">Guest Credentials</button>
                </div>

                <div className="signup__link">
                    Don't have an account ? <Link to="/signup">Signup</Link>
                </div>
            </form>

            
        </div>
    )
}

export default Login
