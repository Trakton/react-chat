import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import  ConnectedRouter  from 'react-router-redux/ConnectedRouter'
import { Provider } from 'react-redux';
import store, {history} from './store';
import registerServiceWorker from './services/registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root')
);

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

registerServiceWorker();