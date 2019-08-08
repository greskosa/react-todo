import * as actionTypes from "../constants/actionTypes";

const initialState = {
    items: [],
    lastItemId: 200
};
const updateItems = ({items}, {currentItem})=>
    items.map(item => (item.id !== currentItem.id ? item : {...item, completed: !item.completed}));

const removeItem = ({items}, {currentItem})=>
    items.filter(item => item.id !== currentItem.id);

const addItem = ({items, lastItemId}, {value}) =>{
    return [{
            userId: 33,
            id: lastItemId + 1,
            completed: false,
            title: value.toString()
        }, ...items];
};


export default function todoList(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHECK_ITEM:
          return {...state, items: updateItems(state, action)};

        case actionTypes.REMOVE_ITEM:
            return {...state, items: removeItem(state, action)};

        case actionTypes.ADD_ITEM:
            return {lastItemId: state.lastItemId + 1, items: addItem(state, action)};

        case actionTypes.RESULT_TODOS_FROM_API:
            console.log(action)
            return  {...state, items: action.items}

        default:
            return state;
    }
    return state;
}
