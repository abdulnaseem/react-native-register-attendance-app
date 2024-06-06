import React from 'react';
import ReactDOM from 'react-dom';
import button from './button';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<button />, div);
  ReactDOM.unmountComponentAtNode(div);
});