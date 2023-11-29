import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import cowReducer from "./CowReducer/Reducer"
import diseasesReducer from './CowReducer/Reducer'
import doctorReducer from './CowReducer/Reducer'
import thunk from "redux-thunk";

const rootReducer = combineReducers({ cow: cowReducer , diseases : diseasesReducer , doctor : doctorReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
