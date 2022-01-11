import {projectAuth} from '../config/firebase'
import { useAuth } from './useAuth'
import { useCartContext } from './useCartContext'
import { useLoadingUtils } from './useLoadingUtils'

function useLogout() {

    const {setLoading, setLoaded} = useLoadingUtils()
    const {dispatchAuth} = useAuth()
    const {cartDispatch} = useCartContext()

    const logout = async () => {

        setLoading()

        try{

            await projectAuth.signOut()
            dispatchAuth({type:'LOGOUT'})
            
            cartDispatch({type:'CLEAR_STATE'})

        }catch(err)
        {
            console.log(err.message)
        }finally{   
            setLoaded()
        }
    }
    return {
        logout
    }
}

export default useLogout
