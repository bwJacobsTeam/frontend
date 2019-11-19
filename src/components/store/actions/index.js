import axiosWithAuth from '../utils/axiosWithAuth';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const loginUser = (form) => dispatch => {
    dispatch({ type: LOGIN_USER_START })

    axiosWithAuth()
        .post('/login', form)
        .then(res => {
            console.log('login res', res);
            localStorage.setItem('Authorization', res.data.token);
            dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ type: LOGIN_USER_FAILURE, payload: err })
        });
}

export const REGISTER_ORG_START = 'REGISTER_ORG_START';
export const REGISTER_ORG_SUCCESS = 'REGISTER_ORG_SUCCESS';
export const REGISTER_ORG_FAILURE = 'REGISTER_ORG_FAILURE';

export const registerOrg = (form) => dispatch => {
    dispatch({ type: REGISTER_ORG_START })

    axiosWithAuth()
        .post('https://saveananimal.herokuapp.com/api/organizations/register', form)
        .then(res => {
            console.log('register ORG res', res);
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: REGISTER_ORG_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ type: REGISTER_ORG_FAILURE, payload: err })
        });
}

export const REGISTER_SUPP_START = 'REGISTER_SUPP_START';
export const REGISTER_SUPP_SUCCESS = 'REGISTER_SUPP_SUCCESS';
export const REGISTER_SUPP_FAILURE = 'REGISTER_SUPP_FAILURE';

export const registerSupp = (form) => dispatch => {
    dispatch({ type: REGISTER_SUPP_START })

    axiosWithAuth()
        .post('https://saveananimal.herokuapp.com/api/supporters/register', form)
        .then(res => {
            console.log('register SUPP res', res);
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: REGISTER_SUPP_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ type: REGISTER_SUPP_FAILURE, payload: err })
        });
}
