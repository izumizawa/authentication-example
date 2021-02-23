import { all } from "redux-saga/effects";

import { signInSagas } from "../Ducks/SignIn/Sagas";

export default function* rootSaga() {
  yield all([signInSagas]);
}
