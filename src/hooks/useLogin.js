import {useState, useEffect} from 'react'
import {projectAuth} from '../config/firebase'
import { useLoadingUtils } from './useLoadingUtils'

function useLogin() {

    const [error, setError] = useState(null)
    const [cancelled, setCancelled] = useState(false)
    const {setLoading, setLoaded} = useLoadingUtils()

    useEffect(()=>{

        return () => setCancelled(true)
    },[])

    const login = async(email, password) => {

        setLoading()
        try{
            const res = await projectAuth.signInWithEmailAndPassword(email,password)
            console.log({res})
            
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
