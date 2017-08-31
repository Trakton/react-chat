import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import  ConnectedRouter  from 'react-router-redux/ConnectedRouter'
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, {history} from './store';
import registerServiceWorker from './services/registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route component={App}/>
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root')
);

store.subscribe(() =>
  console.log(store.getState())
)

registerServiceWorker();