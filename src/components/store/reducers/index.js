import { LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, REGISTER_USER_START, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE, CREATING_CAMPAIGN_START, CREATING_CAMPAIGN_SUCCESS, CREATING_CAMPAIGN_FAILURE, DELETE_SUCCESS, DELETE_FAILURE, DELETE_START } from "../actions";

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
    registeringErr: '',
    isAdding: false,
    error: '',
    isDeleting: false,
    deletingErr: '',
    campaigns: [],
    currentCampaign: {}
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
        case CREATING_CAMPAIGN_START:
            return {
                ...state,
                isAdding: true,
                error: '',
            }
        case CREATING_CAMPAIGN_SUCCESS:
            return {
                ...state,
                isAdding: false,
                error: '',
                campaign: action.payload
            }
        case CREATING_CAMPAIGN_FAILURE:
            return {
                ...state,
                error: action.payload,
                isAdding: false
            }
        case DELETE_START:
            return {
                ...state,
                isDeleting: true,
                deletingErr: ''
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                isDeleting: false,
                campaigns: action.payload,
                deletingErr: '',
            }
        case DELETE_FAILURE:
            return {
                ...state,
                deletingErr: action.payload,
                isDeleting: false
            }

        default:
            return state;
    }
};

export default reducer;