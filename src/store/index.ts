import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducer/";
import Thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(Thunk));
