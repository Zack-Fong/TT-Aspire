import { createStore, combineReducers } from "redux";

import cardDetailsReducer from "./cardDetails/cardDetailsReducer";

const reducers = {
    //List of Reducers
    cardDetailsReducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default store;