import React, { Component } from 'react'
import axios from 'axios'
import Todo from './Todo'
import update from 'immutability-helper'
import TodoForm from './TodoForm'



class TodosContainer extends Component {
  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/todos.json')
      .then(response => {
        console.log(response)
        this.setState({ todos: response.data })
      })
      .catch(error => console.log(error))
  }
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      editingId: null,
      notification: ''
    }
  }
  addNewTodo = () => {
    axios.post(
      'http://localhost:3001/api/v1/todos',
      {
        todo:
          {
            title: '',
            body: ''
          }
      }
    )
      .then(response => {
        console.log(response)
        const todos = update(this.state.todos, {
          $splice: [[0, 0, response.data]]
        })
        this.setState({ todos: todos, editingId: response.data.id })
      })
      .catch(error => console.log(error))
  }
  updateTodo = (todo) => {
    const todoIndex = this.state.todos.findIndex(x => x.id === todo.id)
    const todos = update(this.state.todos, {
      [todoIndex]: { $set: todo }
    })
    this.setState({ todos: todos, notification: 'All Changes Saved.' })
  }
  resetNotification = () => {
    this.setState({ notification: '' })
  }
  enableEditing = (id) => {
    this.setState({ editingId: id },
      () => { this.title.focus() })
  }
  deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/api/v1/todos/${id}`)
      .then(response => {
        const todoIndex = this.state.todos.findIndex(x => x.id === id)
        const todos = update(this.state.todos, { $splice: [[todoIndex, 1]] })
        this.setState({ todos: todos })
      })
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div>
        <button className="addTodoButton" onClick={this.addNewTodo}>
          Add Todo
        </button>
        <span className="notification">
          {this.state.notification}
        </span>
        <div>
          {this.state.todos.map((todo) => {
            if (this.state.editingId === todo.id) {
              return (<TodoForm todo={todo} key={todo.id} updateTodo={this.updateTodo} resetNotification={this.resetNotification} titleRef={input => this.title = input} />)
            }
            return (<Todo todo={todo} key={todo.id} onClick={this.enableEditing} onDelete={this.deleteTodo} />)
          })}
        </div>
      </div>
    );
  }
}

export default TodosContainer
