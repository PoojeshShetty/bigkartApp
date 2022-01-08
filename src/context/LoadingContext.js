import {createContext} from 'react'
import { useReducer } from 'react/cjs/react.development'
import {loadReducer,initialState} from '../reducer/LoadReducer'

export const LoadingContext = createContext()

function LoadingContextProvider({children}) {

    const [loading, loadDispatch] = useReducer(loadReducer,initialState)

    return (
        <LoadingContext.Provider value={{...loading, loadDispatch}}>
            {children}
           
        </LoadingContext.Provider>
    )
}

export default LoadingContextProvider
