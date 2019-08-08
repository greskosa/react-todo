import * as actionTypes from "../constants/actionTypes";

const initialState = {
    title: "TODO list",
    addBtn: {
        label: "Add",
        description: "Add new TODO item"
    },
    loading: false
};

export default function page(state = initialState, action){
    switch (action.type) {
        case actionTypes.GET_TODOS_FROM_API:
            return {...state, loading: true};

        case actionTypes.RESULT_TODOS_FROM_API:
            return {...state, loading: false};

        default:
            return state;
    }
}
