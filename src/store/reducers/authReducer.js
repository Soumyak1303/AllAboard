import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utility";

const initialState = {
  token: null,
  userId: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return updateObject(state, { error: null });
    case actionTypes.AUTH_SUCESS:
      return updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
      });
    case actionTypes.AUTH_FAIL:
      return updateObject(state, {
        error: action.error,
      });

    default:
      return state;
  }
};

export default reducer;
