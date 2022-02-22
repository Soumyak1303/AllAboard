import * as actionTypes from "./actionTypes";
import axios from "axios";

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

const authSuccess = (idToken = "", userId = "") => {
  return {
    type: actionTypes.AUTH_SUCESS,
    idToken: idToken,
    userId: userId,
  };
};

const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

const auth = (payload) => {
  const { email, password, userName, isSignUp = false } = payload;
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    console.log("authData", authData);

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyComonThoIgFSDzDr9HDxi34J-JBIzjK5g";
    if (!isSignUp)
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyComonThoIgFSDzDr9HDxi34J-JBIzjK5g";
    axios
      .post(url, authData)
      .then((response) => {
        response = JSON.parse(response.data.contents);
        dispatch(authSuccess(response.idToken, response.localId));
      })
      .catch((err) => {
        console.log("err", err);
        dispatch(authFail(err));
      });
  };
};

export default auth;
