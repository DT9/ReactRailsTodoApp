import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import TodoForm from './TodoForm'
import TodosContainer from './TodosContainer'
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import util from 'util'
describe('TodoForm', () => {

    it('Constructor', () => {
        const div = document.createElement('div');
        const todo = { 'id': 1, 'title': 'title', 'body': 'body' }
        ReactDOM.render(<TodoForm todo={todo} key={todo.id} onClick={TodosContainer.enableEditing} onDelete={TodosContainer.deleteTodo} />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    test('Todo changes when edited', () => {
        const todo = { 'id': 1, 'title': 'title', 'body': 'body' }
        const component = renderer.create(
            <TodoForm todo={todo} key={todo.id} onClick={TodosContainer.enableEditing} onDelete={TodosContainer.deleteTodo} />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        
        // manually trigger the callback
        tree.children[0].children[0].props.value = 'title1'
        tree.children[0].props.onBlur();
        // re-rendering
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
                
    });


})
