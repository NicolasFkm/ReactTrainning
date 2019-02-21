import { inputReducer } from './inputReducer'
import { combineReducers } from "redux";

export const Reducers = combineReducers({
    inputButton: inputReducer
});