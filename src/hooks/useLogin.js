import {useState, useEffect} from 'react'

function useLogin() {

    const [error, setError] = useState(null)
    const [cancelled, setCancelled] = useState(false)

    useEffect(()=>{

        return () => setCancelled(true)
    },[])

    const login = async(email, password) => {

        try{
            
        }catch(err)
        {
            if(!cancelled)
                setError(err.message)
        }finally{

        }
    }

    return {
        login
    }
}

export {
    useLogin
} 
