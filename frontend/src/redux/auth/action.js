import React from "react";
import axios from "axios";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
} from "./actionType";

export const signupRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};
export const signupSuccess = (payload) => {
  return {
    type: SIGNUP_SUCCESS,
    payload,
  };
};
export const signupFailure = () => {
  return {
    type: SIGNUP_FAILURE,
  };
};

export const signinRequest = () => {
  return {
    type: SIGNIN_REQUEST,
  };
};
export const signinSuccess = (payload) => {
  return {
    type: SIGNIN_SUCCESS,
    payload,
  };
};
export const signinFailure = () => {
  return {
    type: SIGNIN_FAILURE,
  };
};

export const signupUser = (payload) => (dispatch) => {
  dispatch(signupRequest());
  return axios
    .post("", payload)
    .then((res) => dispatch(signupSuccess(res.data)))
    .catch((err) => dispatch(signupFailure(err)));
};

export const signinUser = (payload) => (dispatch) => {
  dispatch(signinRequest());
  return axios
    .post("", payload)
    .then((res) => dispatch(signinSuccess(res.data)))
    .catch((err) => dispatch(signinFailure(err)));
};
