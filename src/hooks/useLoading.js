import {useContext} from 'react'
import {LoadingContext} from '../context/LoadingContext'

function useLoading() {
    
    const context = useContext(LoadingContext)

    if(!context)
        console.log("Define component in the load provider")

    return context
}

export{
    useLoading
} 
