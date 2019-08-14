import React from "react";
import TodoListItem from '../components/ToDoItem/ToDoItem'
import AddNewItem from '../components/AddNewItem/AddNewItem'
import Loading from "../components/Loading/Loading";
import {addItemAction, removeItemAction, checkItemAction, getTodoListAction} from "../actions";
import connect from "react-redux/es/connect/connect";
import  {LanguageContext} from '../context/l18n';


class ToDoList extends React.Component{
    componentDidMount(){
        this.props.getTodoList();
    }
    render(){
       let {page, todoList, checkItem, addItem, removeItem} = this.props;
       let l18n = this.context;
       return(
           <div>
               <div>{page.title}</div>
               <AddNewItem addBtn = {page.addBtn} addItem = {addItem} />
               <Loading loading={page.loading} l18n={l18n}/>
               <ul className = "todo-list">
                   {
                       todoList.items.map((item, index) =>
                         <TodoListItem key={item.id}
                                       item = {item}
                                       index = {index+1}
                                       checkItem={()=>checkItem(item)}
                                       removeItem = {()=>removeItem(item)}/>
                       )
                   }
               </ul>
           </div>
       )
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page,
        todoList: state.todoList
    };

};

const mapDispatchToProps = dispatch => ({
    addItem: (event, ref) =>  {
        event.preventDefault();
        dispatch(addItemAction(ref.current.value));
        ref.current.value = '';
    },
    removeItem: item => dispatch(removeItemAction(item)),
    checkItem: item => dispatch(checkItemAction(item)),
    getTodoList: ()=> dispatch(getTodoListAction())
});

ToDoList.contextType = LanguageContext;
console.log(LanguageContext)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);
