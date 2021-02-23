import { all, takeLatest, call } from "redux-saga/effects";
import { SignInActionTypes } from "./types";
import api from "../../Services/Api";
// import { root } from "../types";

export function* createAccount(action: any) {
  const { username, password } = action.payload;
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  try {
    yield call(api.post, "/players", { username, password }, config);
    console.log("try");
  } catch (error) {
    console.log(error);
  }
}

export const signInSagas = all([
  takeLatest(SignInActionTypes.CREATE_ACCOUNT, createAccount),
]);
