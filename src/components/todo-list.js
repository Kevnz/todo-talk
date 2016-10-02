import React, { Component } from 'react';
import ToDoItem from './todo-item';

class ToDoList extends Component {
  render() {
    console.log('this todos', this.props.todos);
    return (
      <div className="ToDoList-container">
        {this.props.todos.map((todo, index)=> <ToDoItem
          key={`item-${todo.id}`}
          todo={todo}
          onToDoCompleted={this.props.onToDoCompleted}
          ></ToDoItem>)}
      </div>
    );
  }
}

export default ToDoList;
