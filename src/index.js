import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './services/registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
       <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, 
    document.getElementById('root')
);

registerServiceWorker();
