import axios from 'axios';
import * as types from './actionTypes';

const url = process.env.REACT_APP_BASE_URL;

export const register = (values) => (dispatch) => {
  dispatch({ type: types.REGISTER_START });
  axios
    .post(`${url}/api/registration`, values)
    .then((res) => {
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: types.REGISTER_FAIL,
        payload: err.response.data.message
      });
    });
};

export const login = (values) => (dispatch) => {
  dispatch({ type: types.LOGIN_START });
  axios
    .post(`${url}/api/login`, values)
    .then((res) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: types.LOGIN_FAIL,
        payload: err.response.data.message
      });
    });
};
