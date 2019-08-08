import React from "react";
import './ToDoItem.css'

export default function ToDoItem({index, item, checkItem, removeItem}) {
    return (
        <li className={item.completed ? "todo-list__item todo-list__item--cross-through" : "todo-list__item"}>{index} {item.title} <input checked={item.completed} type="checkbox" onChange={checkItem}/> <button onClick={removeItem}>X</button></li>
    );
}

