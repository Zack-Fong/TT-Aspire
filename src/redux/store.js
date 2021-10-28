import { createStore, combineReducers } from "redux";

const reducers = {
    //List of Reducers
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default store;