import * as actionTypes from "../constants/actionTypes";

export const removeItemAction = (currentItem) => ({
    type: actionTypes.REMOVE_ITEM,
    currentItem
});

export const addItemAction = (value) => ({
    type: actionTypes.ADD_ITEM,
    value
});

export const checkItemAction = (currentItem) =>{
    return ({
        type: actionTypes.CHECK_ITEM,
        currentItem
    });
};

export  const getTodoListAction = ()=> ({type: actionTypes.GET_TODOS_FROM_API});


