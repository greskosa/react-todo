import * as actionTypes from "../constants/actionTypes";
import { put} from 'redux-saga/effects';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
function sleep (ms) {
    return new Promise(res => {
        setTimeout(res, ms)
    })
}
export default function* getTodoList() {
    const data = yield fetch(apiUrl)
        .then(response => response.json());

    yield sleep(1000); //just for demonstration
    yield put({type: actionTypes.RESULT_TODOS_FROM_API, items: data});
}
