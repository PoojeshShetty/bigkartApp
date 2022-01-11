import {useState, useEffect} from 'react'
import { useLoadingUtils } from './useLoadingUtils'
import {projectAuth, projectFirestore} from '../config/firebase'
import { useAuth } from './useAuth'

function useSignup() {

    const {setLoading, setLoaded} = useLoadingUtils()
    const [error, setError] = useState(null)
    const [cancelled , setCancelled] = useState(false)
    const {dispatchAuth} = useAuth()

    useEffect(()=>{
        return () => setCancelled(true)
    },[])

    const signup = async (email, password, username) => {

        setLoading()
        setError(null)
        try{
            const res = await projectAuth.createUserWithEmailAndPassword(email,password)
            await projectFirestore.collection('users').doc(res.user.uid).set({
                username,
                email,
                address:'',
                type:'user'
            })

            const user = {
                uid: res.user.uid,
                username,
                email,
                address: '',
                type:'user'
            }

            dispatchAuth({type:'LOGIN',payload:user})

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
