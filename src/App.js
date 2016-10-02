import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoEntry from './components/todo-entry';
import ToDoList from './components/todo-list';
import uuid from 'uuid';

let todos = [];
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React-Todo</h2>
        </div>
        <p className="App-intro">
          Enter a new todo or complete an existing one.
        </p>
        <ToDoEntry onToDoSave={(todo) => {
          console.log('todo', todo);
          const newId = uuid.v4();
          todos.push({item: todo, id:newId, complete: false });
          this.forceUpdate();
        }} />
        <ToDoList todos={todos} onToDoCompleted={(completedTodo)=> {
          console.log('onToDoCompleted', completedTodo);
          todos = todos.map((todo) => {
            if(todo.id === completedTodo.id) {
              todo.complete = true;
            }
            return todo;
          });
          this.forceUpdate();
        }} />
      </div>
    );
  }
}

export default App;
