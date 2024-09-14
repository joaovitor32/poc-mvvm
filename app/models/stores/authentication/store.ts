import { createStore, combineReducers } from "redux";
import { authenticationReducer } from "./reducer";

const rootReducer = combineReducers({
  auth: authenticationReducer,
});

export const store = createStore(rootReducer);