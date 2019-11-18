import { LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "../actions";

const initialState = {
    'Organization': [
        {
            organization_name: '',
            email: '',
            password: '',
            id: ''
        }
    ],
    'Supporter': [
        {
            first_name: 'Eric',
            last_name: 'Richards',
            email: 'er@gmail.com',
            password: 'password',
            id: '0'
        }
    ],
    currentUser: {},
    isLoggingIn: false,
    loggingInErr: ''
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

        default:
            return state;
    }
};

export default reducer;