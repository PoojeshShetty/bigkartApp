import {useState,useEffect} from 'react'
import { useLoadingUtils } from './useLoadingUtils'
import {projectFirestore} from '../config/firebase'

function useCollection(name) {

    const [error ,setError] = useState()
    const [cancelled, setCancelled] = useState(false)
    const [success,setSuccess] = useState(null)

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

    const updateDocument = async (object,id) => {

        setLoading()

        try{

            await res.doc(id).update({...object})

            setSuccess(true)
        }catch(err)
        {
            if(!cancelled)
                setError(err.message)
        }finally{
            setLoaded()
        }
    }

    const deleteDocument = async (id) => {

        setLoading()

        try{

            await res.doc(id).delete()

            setSuccess(true)
        }catch(err)
        {
            if(!cancelled)
                setError(err.message)
        }finally{
            setLoaded()
        }
    }

    const addDocumentWithUrlId = async (url,id,object) => {
        
        const req = projectFirestore.collection(url)

        setLoading()

        try{

            await req.doc(id).set({...object})

            setSuccess(true)
        }catch(err)
        {
            if(!cancelled)
                setError(err.message)
        }finally{
            setLoaded()
        }
    }

    const updateDocumentWithUrl = async (url,id,object) => {
        
        const req = projectFirestore.collection(url).doc(id)
        
        setLoading()

        try{

            await req.update({...object})

            setSuccess(true)
        }catch(err)
        {
            if(!cancelled)
                setError(err.message)
        }finally{
            setLoaded()
        }
    }

    const deleteDocumentWithUrl = async (url,id) => {
        
        const req = projectFirestore.collection(url).doc(id)
        
        setLoading()

        try{

            await req.delete()

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
        updateDocument,
        deleteDocument,
        addDocumentWithUrlId,
        updateDocumentWithUrl,
        deleteDocumentWithUrl,
        error,
        success
    }
    
}

export default useCollection
