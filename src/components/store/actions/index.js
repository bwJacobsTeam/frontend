import axiosWithAuth from '../utils/axiosWithAuth';
import { addComments } from '@babel/types';

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
            localStorage.setItem('role', res.data.role);
            dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ type: REGISTER_USER_FAILURE, payload: err })
        })
}

export const CREATING_CAMPAIGN_START = 'CREATING_CAMPAIGN_START';
export const CREATING_CAMPAIGN_SUCCESS = 'CREATING_CAMPAIGN_SUCCESS';
export const CREATING_CAMPAIGN_FAILURE = 'CREATING_CAMPAIGN_FAILURE';

export const createCampaign = (newCampaign) => dispatch => {
    dispatch({ type: CREATING_CAMPAIGN_START });
    console.log('newCampaign', newCampaign);
    axiosWithAuth()
        .post('https://saveananimal.herokuapp.com/api/campaigns', newCampaign)
        .then(res => {
            console.log('addCampaign res', res);
            dispatch({ type: CREATING_CAMPAIGN_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ type: CREATING_CAMPAIGN_FAILURE, payload: err })
        })
}
