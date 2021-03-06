import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Container } from 'semantic-ui-react';
import createSagaMiddleware from 'redux-saga';
import * as serviceWorker from './serviceWorker';
import todoReducer from './redux/reducers';
import AllTodos from './containers/AllTodos';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(todoReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Container style={{ paddingTop: '20px' }}>
      <AllTodos />
    </Container>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
