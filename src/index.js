import React from 'react';
import ReactDOM from 'react-dom';
import App from './scenes/index.js';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './services/registerServiceWorker';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
