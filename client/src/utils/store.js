import { createStore } from "redux";
import { reducer } from "./reducers";

//This line, in junction with the reducers change in reducers.js, negates the need for the GlobalState.js

export const store = createStore(reducer);
