import {createContext,useReducer,useEffect} from 'react'
import { initialState,authReducer } from '../reducer/AuthReducer'
import { projectAuth,projectFirestore } from '../config/firebase'

export const AuthContext = createContext()

function AuthContextProvider({children}) {

    const [authState, dispatchAuth] = useReducer(authReducer,initialState)
    const uid = authState.uid

    useEffect(()=> {
        const unsub = projectAuth.onAuthStateChanged(user =>{
            if(user)
            dispatchAuth({type:'UPDATE_UID',payload:user.uid})
            else
            dispatchAuth({type:'IS_AUTH_READY',payload:null})
            unsub()
        })
    },[])

    useEffect(()=>{

        const getUser = async () => {
            if(!uid) return
            const res = await projectFirestore.collection('users').doc(uid).get()
            dispatchAuth({type:'IS_AUTH_READY',payload:{uid:res.id,...res.data()}})
        }

        getUser()

    },[uid])

    return (
        <AuthContext.Provider value={{...authState,dispatchAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
