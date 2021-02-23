import { SignInActionTypes } from "./types";
import { signInReducerType } from "../types";

export const initialState: signInReducerType = {
  username: "",
  password: "",
};

export const signInReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SignInActionTypes.CLEAR_SIGNIN_REDUCER:
      return initialState;

    default:
      return state;
  }
};
