import { combineReducers } from "redux";
import loading from "./LoadingReducers";
import user from "./UserReducer";

export default combineReducers({
  loading,
  user,
});
