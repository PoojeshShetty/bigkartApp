import {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'

function useAuth() {

    const context = useContext(AuthContext)

    if(!context)
        console.log('The component should be inside AuthProvider')
    
    return context
}

export {
    useAuth
} 
