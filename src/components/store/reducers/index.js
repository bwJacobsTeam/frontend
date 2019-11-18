import { LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, REGISTER_ORG_START, REGISTER_ORG_SUCCESS, REGISTER_ORG_FAILURE, REGISTER_SUPP_START, REGISTER_SUPP_SUCCESS, REGISTER_SUPP_FAILURE } from "../actions";

const initialState = {
    'Organization': [
        {
            organization_name: 'Animals',
            email: 'animals@animals.com',
            password: 'animals',
            id: '1'
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
    loggingInErr: '',
    orgRegistering: false,
    orgRegisteringErr: '',
    suppRegistering: false,
    suppRegisteringErr: ''
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
        case REGISTER_ORG_START:
            return {
                ...state,
                orgRegistering: true
            }
        case REGISTER_ORG_SUCCESS:
            return {
                ...state,
                orgRegistering: false,
                currentUser: action.payload
            }
        case REGISTER_ORG_FAILURE:
            return {
                ...state,
                suppRegistering: false,
                suppRegisteringErr: action.payload
            }
        case REGISTER_SUPP_START:
            return {
                ...state,
                suppRegistering: true
            }
        case REGISTER_SUPP_SUCCESS:
            return {
                ...state,
                suppRegistering: false,
                currentUser: action.payload
            }
        case REGISTER_SUPP_FAILURE:
            return {
                ...state,
                suppRegistering: false,
                suppRegisteringErr: action.payload
            }

        default:
            return state;
    }
};

export default reducer;