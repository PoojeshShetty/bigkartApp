import React from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'

function Signup() {
    return (
        <div className="signup__container">
            <form className="signup__form">

                <span className="form__title">
                    Sign up
                </span>

                <div className="form__controle">
                    <label>Username</label>
                    <input 
                        type="text" 
                        placeholder='Username'
                    />
                </div>

                <div className="form__controle">
                    <label>Email</label>
                    <input 
                        type="email" 
                        placeholder='Email'
                    />
                </div>

                <div className="form__controle">
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder='Password'
                    />
                </div>

                <button className="btn btn--black">Signup</button>

                
                <div className="login__link">
                    Have an account ? <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Signup
