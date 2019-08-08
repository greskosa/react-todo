import * as actionTypes from "../constants/actionTypes";
import {takeLatest, all } from 'redux-saga/effects';
import getTodoList from './getTodoList';


function* actionWatcher() {
    yield takeLatest(actionTypes.GET_TODOS_FROM_API, getTodoList)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}
