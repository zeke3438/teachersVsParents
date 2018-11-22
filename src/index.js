import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';
import store from './config/Store'
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// serviceWorker.unregister();
