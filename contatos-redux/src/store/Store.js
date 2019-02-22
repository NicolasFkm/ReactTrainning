import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import Reducers from '../reducers/RootReducers';

export const Store = createStore(Reducers, applyMiddleware(thunkMiddleware));