
const authReducer = (state,action) => {
    
    switch(action.type)
    {
        case 'LOGIN':
            return {...state, user:action.payload}
        default:
            return state
    }
}

const initialState = {
    user:null,
    isAuthReady: false
}

export {
    initialState,
    authReducer
}