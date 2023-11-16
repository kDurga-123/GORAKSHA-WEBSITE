import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import cowReducer from "./Cowreducer/reducer"
import diseasesReducer from './Cowreducer/reducer'
import thunk from "redux-thunk";

const rootReducer = combineReducers({ cow: cowReducer , diseases : diseasesReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
