import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return (
        <div className="login__container">
            <form className="login__form">

                <span className="form__title">
                    Login
                </span>

                <div className="form__control">
                    <label>
                        Email
                    </label>
                    <input 
                        type="email" 
                        placeholder='Email'
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
                        required
                    />
                </div>

                <div className="form__btncl">
                    <button className="btn btn--black">Login</button>
                    <button className="btn btn--black btn--guest">Guest Credentials</button>
                </div>
            </form>

            <div className="signup__link">
                Don't have an account ? <Link to="/signup">Signup</Link>
            </div>
        </div>
    )
}

export default Login
