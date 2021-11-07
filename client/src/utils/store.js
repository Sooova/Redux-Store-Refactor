import { createStore } from "redux";
import { reducer } from "./reducers";

//This line, in junction with the reducers change in reducers.js, negates the need for the GlobalState.js

const store = createStore(reducer);

export default store;
