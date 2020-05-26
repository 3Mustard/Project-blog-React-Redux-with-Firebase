const initialState = {
    authError: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        //if this case happens, the state plus and error will go to the root reducer then store under the auth: key. the root reducer is our store based on the keys it has associated with reducers.
        case 'LOGIN_ERROR':
            consoles.log('login error');
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            consoles.log('login success');
            return {
                ...state,
                authError: null
            }
            default:
                return state;
    }
}  

export default authReducer;