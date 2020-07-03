import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Button } from './components/button';
import { ClassCounter } from './components/class-counter';
import { Counter } from './components/counter';
import { ReduxCounter } from './components/redux-counter';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <>
      <Button text="Button text" />
      <ClassCounter />
      <ClassCounter initCount={5} />
      <Counter />
      <Counter initCount={10} />
      <ReduxCounter />
    </>
  </Provider>,
  document.getElementById('root')
);
