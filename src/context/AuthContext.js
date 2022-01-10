import {createContext,useReducer} from 'react'
import { initialState,authReducer } from '../reducer/AuthReducer'

export const AuthContext = createContext()

function AuthContextProvider({children}) {

    const [authState, dispatchAuth] = useReducer(authReducer,initialState)

    return (
        <AuthContext.Provider value={{...authState,dispatchAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
