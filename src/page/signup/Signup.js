import {useState} from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'
import { useSignup } from '../../hooks/useSignup'

function Signup() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formError, setFormError] = useState(null)

    const {signup, error:sigupError} = useSignup()

    const handleSignup = (e)  => {
        e.preventDefault()

        if(checkFormError())
        {
            setTimeout(() => setFormError(null),5000)
            return 
        }

        signup(email,password,username)

    }

    const checkFormError = () => {
        
        if(username.length>20)
        {
            setFormError('username length should be less then 20 characters')
            return true
        }
        if(password.length<10)
        {
            setFormError('password length should be greater than or equal to 10')
            return true
        }
        return false
    }

    return (
        <div className="signup__container">
            <form className="signup__form"  onSubmit={(e) => handleSignup(e)}>

                <span className="form__title">
                    Sign up
                </span>

                {
                    formError && 
                        <div className="error--msg">
                            {formError}
                        </div>
                }

                {
                    sigupError &&
                        <div className="error--msg">
                            {sigupError}
                        </div>
                }

                <div className="form__controle">
                    <label>Username</label>
                    <input 
                        type="text" 
                        placeholder='Username'
                        value={username}
                        onChange={({target}) => setUsername(target.value.trim())}
                        required
                    />
                </div>

                <div className="form__controle">
                    <label>Email</label>
                    <input 
                        type="email" 
                        placeholder='Email'
                        value={email}
                        onChange={({target}) => setEmail(target.value.trim())}
                        required
                    />
                </div>

                <div className="form__controle">
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder='Password'
                        value={password}
                        onChange={({target}) => setPassword(target.value.trim())}
                        required
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
