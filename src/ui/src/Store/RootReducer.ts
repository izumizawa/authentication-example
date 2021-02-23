import { combineReducers } from "redux";

import { signInReducer } from "../Ducks/SignIn/Reducer";

const appReducer = combineReducers({
  signIn: signInReducer,
});

const rootReducer = (state: any, action: any) => appReducer(state, action);

export default rootReducer;
