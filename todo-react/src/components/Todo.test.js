import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import TodoForm from './TodoForm'
import TodosContainer from './TodosContainer'
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

describe('Todo', () => {
    it('Constructor', () => {
        const div = document.createElement('div');
        const todo = {'id':1,'title':'title','body':'body'}
        ReactDOM.render(<Todo todo={todo} key={todo.id} onClick={TodosContainer.enableEditing} onDelete={TodosContainer.deleteTodo} />, div); 
        ReactDOM.unmountComponentAtNode(div);
    })
  })
  