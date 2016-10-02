import React, { Component } from 'react';

class ToDoEntry extends Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.handleClick = this.handleClick.bind(this);
  }
  _input = ''
  handleClick(e) {
    if(this.props.onToDoSave) {
      this.props.onToDoSave(this._input.value);
    }
  }

  render() {
    return (
      <div className="ToDoEntry-container">
        <input ref={(c) => this._input = c} />
        <button onClick={this.handleClick}>Save</button>
      </div>
    );
  }
}

export default ToDoEntry;
