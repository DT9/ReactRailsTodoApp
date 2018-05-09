import React from 'react';
import ReactDOM from 'react-dom';
import TodosContainer from './TodosContainer';

it('renders TodosContainer without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodosContainer />, div); 
  ReactDOM.unmountComponentAtNode(div);
});
