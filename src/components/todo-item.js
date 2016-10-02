import React, { Component } from 'react';

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.handleClick = this.handleClick.bind(this);
  }
  _input = ''
  handleClick(e) {
    if(this.props.onToDoCompleted) {
      this.props.onToDoCompleted(this.props.todo);
    }
  }

  render() {
    return (
      <div className="ToDoItem-container">
        <span style={{textDecoration: (this.props.todo.complete ? 'line-through' : 'none')}}>{this.props.todo.item}</span> -
        <button onClick={this.handleClick}>Complete</button>
      </div>
    );
  }
}

export default ToDoItem;
