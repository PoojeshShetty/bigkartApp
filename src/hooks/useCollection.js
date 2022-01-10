import {useState,useEffect} from 'react'
import { useLoadingUtils } from './useLoadingUtils'
import {projectFirestore} from '../config/firebase'

function useCollection(name) {

    const [error ,setError] = useState()
    const [cancelled, setCancelled] = useState(false)
    const [success,setSuccess] = useState(null)
    const [documents, setDocuments] = useState([])

    const {setLoaded,setLoading} = useLoadingUtils()

    const res = projectFirestore.collection(name)

    useEffect(()=>{
        return () => setCancelled(true)
    },[])

    const addDocument = async (object) => {

        setLoading()

        try{

            await res.add({...object})

            setSuccess(true)
        }catch(err)
        {
            if(!cancelled)
                setError(err.message)
        }finally{
            setLoaded()
        }
    }

    const getDocuments = async () => {
        
        setLoading()

        try{

            const docs = await res.get()

            console.log({docs})

            setSuccess(true)
        }catch(err)
        {
            if(!cancelled)
                setError(err.message)
        }finally{
            setLoaded()
        }
    }


    return{
        addDocument,
        getDocuments,
        error,
        success
    }
    
}

export default useCollection
