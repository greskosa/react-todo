import React from 'react';
import './App.css';
import ToDoList from './containers/ToDoList';
import LangChoose from './containers/LangChoose/LangChoose'

function App() {
  return (
    <div className="app">
        <LangChoose />
        <ToDoList />
    </div>
  );
}


export default App;
