import axiosWithAuth from '../utils/axiosWithAuth';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const loginUser = (form) => dispatch => {
    dispatch({ type: LOGIN_USER_START })

    axiosWithAuth()
        .post('https://saveananimal.herokuapp.com/api/auth/login', form)
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

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const registerUser = (form) => dispatch => {
    dispatch({ type: REGISTER_USER_START })

    axiosWithAuth()
        .post('https://saveananimal.herokuapp.com/api/auth/register', form)
        .then(res => {
            console.log('register res', res);
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ type: REGISTER_USER_FAILURE, payload: err })
        });
}