import {useEffect,useState} from 'react'
import { projectFirestore } from '../config/firebase'
import { useLoading } from './useLoading'
import { useLoadingUtils } from './useLoadingUtils'

function useProducts() {

    const {setLoading,setLoaded} = useLoadingUtils()
    const [products,setProducts] = useState()
    const {loading} = useLoading()

    useEffect(()=>{

        console.log('useeffect')
        const getUser = async () =>{
    
            try{
                setLoading()
                const user = await projectFirestore.collection('users').get()
                
                if(user.exists)
                console.log({user})

            }catch(err)
            {
                console.log(err.message)
            }finally{
                setLoaded()
            }
        }

        getUser()
    },[setLoaded,setLoading])

    return {
        products
    }
}

export {
    useProducts
} 
