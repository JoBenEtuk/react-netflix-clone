import * as loadingActionTypes from "./LoadingActionTypes";
import * as loginService from "../services/LoginService";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: loadingActionTypes.SHOW_LOADING });
    const userCredentials = await loginService.login(email, password);
    if (userCredentials) {
      console.log("Signed in user: ");
      console.log(userCredentials);
    }
    dispatch({ type: loadingActionTypes.HIDE_LOADING });
  } catch (error) {
    console.log(error);
  }
};
