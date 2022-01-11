import { useLoading } from './useLoading'

function useLoadingUtils() {

    const {loadDispatch} = useLoading()

    const setLoading = () => {
        loadDispatch({type:'LOADING'})
    }

    const setLoaded = () => {
        loadDispatch({type:'LOADED'})
    }

    return {
        setLoading,
        setLoaded
    }
}

export {
    useLoadingUtils
} 
