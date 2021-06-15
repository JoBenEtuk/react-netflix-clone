// import redux saga.
import { call, put, takeLatest } from "redux-saga/effects";
// import action types.
import * as loadingActionTypes from "../actions/LoadingActionTypes";
import * as loginActionTypes from "../actions/LoginActionTypes";

import * as loginService from "../services/LoginService";

function* login(action) {
  try {
    yield put({ type: loadingActionTypes.SHOW_LOADING });

    const userCredentials = yield call(
      loginService.login,
      action.payload.email,
      action.payload.password
    );
    if (userCredentials != null) {
      console.log("Signed in user: ");
      console.log(userCredentials);
    }

    yield put({ type: loadingActionTypes.HIDE_LOADING });
  } catch (error) {
    console.log(error);
  }
}

function* loginSaga() {
  yield takeLatest(loginActionTypes.LOGIN, login);
}

export default loginSaga;
