import { SignInActionTypes } from "./types";

export const createAccountAction = (payload: {
  username: string;
  password: string;
}) => ({
  payload,
  type: SignInActionTypes.CREATE_ACCOUNT,
});

export const clearSignInReducerAction = () => ({
  type: SignInActionTypes.CLEAR_SIGNIN_REDUCER,
});
