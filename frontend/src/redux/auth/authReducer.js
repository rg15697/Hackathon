import { loadData, saveData } from "../../utils/localStorage";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
} from "./actionType";

const userToken = loadData("UserToken")?.token;

const initState = {
  isLoading: false,
  isError: false,
  token: userToken ? userToken : "",
  isAuth: userToken ? true : false,
  userProfileData: loadData("userProfileData") || {
    userName: "",
    mobileNumber: "",
    emailId: "",
    about: "",
  },
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        receivedData: payload,
        isError: false,
      };
    }
    case SIGNUP_FAILURE: {
      return {
        ...state,
        isLoading: false,
        receivedData: payload,
        isError: true,
      };
    }

    case SIGNIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SIGNIN_SUCCESS: {
      saveData("userToken", payload.token);
      saveData("userProfileData", payload.userData);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        receivedData: payload,
        isError: false,
      };
    }
    case SIGNIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        receivedData: payload,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
