import React, { Component } from 'react'

class Todo extends Component {
  handleClick = () => {
    this.props.onClick(this.props.todo.id)
  }
  handleDelete = () => {
    this.props.onDelete(this.props.todo.id)
  }
  render() {
    return (
      <div className="tile">
        <span className="deleteButton" onClick={this.handleDelete}>
          X
        </span>
        <h4 onClick={this.handleClick}>
          {this.props.todo.title}
        </h4>
        <p onClick={this.handleClick}>
          {this.props.todo.body}
        </p>
      </div>
    )
  }
}

export default Todo