import { LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, REGISTER_USER_START, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from "../actions";

const initialState = {
    user: {
        first_name: 'Eric',
        last_name: 'Richards',
        email: 'er@gmail.com',
        password: 'password',
        role: 'organization',
        id: '0'
    },
    currentUser: {},
    isLoggingIn: false,
    loggingInErr: '',
    isRegistering: false,
    registeringErr: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_START:
            return {
                ...state,
                isLoggingIn: true
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                currentUser: action.payload
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                loggingInErr: action.payload
            }
        case REGISTER_USER_START:
            return {
                ...state,
                isRegistering: true
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isRegistering: false,
                currentUser: action.payload
            }
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                isRegistering: false,
                registeringErr: action.payload
            }

        default:
            return state;
    }
};

export default reducer;