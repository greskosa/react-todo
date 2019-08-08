import React from "react";
import './AddNewItem.css'

export default class AddNewItem extends React.Component{

    constructor(props){
        super(props);
        this.todoInput = React.createRef();
    }
    render(){
        return (
            <form className="add-item-form" onSubmit={(event) => this.props.addItem(event, this.todoInput)}>
                <input type="input" placeholder={this.props.addBtn.description}   ref={this.todoInput}  />
                <input type="submit" value={this.props.label} />
            </form>
        );
    }
}
