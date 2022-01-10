import {useState, useEffect} from 'react'
import {projectAuth,projectFirestore} from '../config/firebase'
import { useAuth } from './useAuth'
import { useLoadingUtils } from './useLoadingUtils'

function useLogin() {

    const [error, setError] = useState(null)
    const [cancelled, setCancelled] = useState(false)
    const {setLoading, setLoaded} = useLoadingUtils()
    const {dispatchAuth} = useAuth()

    useEffect(()=>{

        return () => setCancelled(true)
    },[])

    const login = async(email, password) => {

        setLoading()
        try{
            const res = await projectAuth.signInWithEmailAndPassword(email,password)

            const user = await projectFirestore.collection('users').doc(res.user.uid).get()

            dispatchAuth({type:'LOGIN',payload:{uid:user.id, ...user.data()}})

        }catch(err)
        {
            if(!cancelled)
                setError(err.message)
        }finally{
            setLoaded()
        }
    }

    return {
        login,
        error
    }
}

export {
    useLogin
} 
