import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AppContainer } from 'react-hot-loader';
import reducers from './reducers';
import App from './components/App';

let store = createStore(reducers);

let render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('App')
  );
};

render();

if (module.hot) {
  module.hot.accept(render);
}
