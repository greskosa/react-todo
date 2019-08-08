import {combineReducers} from "redux";
import page from "./page"
import todoList from "./todoList"

export const rootReducer =  combineReducers({
    page,
    todoList
});

