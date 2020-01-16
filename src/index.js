import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Router} from 'react-router-dom';
import {syncHistoryWithStore} from 'react-router-redux';

import App from './components/app/App';
import createAPI from './api/api';
import reducer from './reducers';
import {Provider} from 'react-redux';
import {compose} from 'recompose';
import browserHistory from './history/history.js';

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );
  const history = syncHistoryWithStore(browserHistory, store);
  ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
