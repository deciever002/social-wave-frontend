import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signin = (formData,history) => async (dispatch) => {
    try {
        console.log(formData);
        const {data} = await api.signIn(formData);
        const token = data?.credential;
        dispatch({type: AUTH,data: token});

        history.push('/');
    } catch (error) {
        console.log(error);
    } 
}

export const signup = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.signUp(formData);

        dispatch({type: AUTH,data: data?.credential});

        history.push('/')
    } catch (error) {
        console.log(error);
    }
}