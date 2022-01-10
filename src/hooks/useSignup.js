import {useState, useEffect} from 'react'
import { useLoadingUtils } from './useLoadingUtils'
import {projectAuth} from '../config/firebase'

function useSignup() {

    const {setLoading, setLoaded} = useLoadingUtils()
    const [error, setError] = useState(null)
    const [cancelled , setCancelled] = useState(false)

    useEffect(()=>{
        return () => setCancelled(true)
    },[])

    const signup = async (email, password, username) => {

        setLoading()
        setError(null)
        try{
            const res = await projectAuth.createUserWithEmailAndPassword(email,password)
            console.log({res})
        }catch(err)
        {
            if(!cancelled)
            {
                setError(err.message)
                setTimeout(()=> setError(null), 4000)
            }
        }finally{
            setLoaded()
        }
    }

    return {
        signup,
        error
    }

}

export {
    useSignup
} 
