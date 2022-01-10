import {projectAuth} from '../config/firebase'
import { useAuth } from './useAuth'
import { useLoadingUtils } from './useLoadingUtils'

function useLogout() {

    const {setLoading, setLoaded} = useLoadingUtils()
    const {dispatchAuth} = useAuth()

    const logout = async () => {

        setLoading()

        try{

            await projectAuth.signOut()
            dispatchAuth({type:'LOGOUT'})

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
