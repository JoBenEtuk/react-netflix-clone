import * as UserActionTypes from "../actions/UserActionTypes";

const initialState = {
  user: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case UserActionTypes.USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
