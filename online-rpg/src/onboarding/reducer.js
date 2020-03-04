import * as types from './actionTypes';

const initialState = {
  user: null,
  loginError: '',
  registerError: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        loginError: ''
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loginError: '',
        user: action.payload
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        loginError: action.payload
      };
    case types.REGISTER_START:
      return {
        ...state,
        registerError: ''
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        registerError: '',
        user: action.payload
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        registerError: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
