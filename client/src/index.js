import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux'; 
import Amplify from 'aws-amplify';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import './index.css'
import config from '../config';

const store = configureStore();

Amplify.configure({
  API: {
    endpoints: [{
      name: 'products',
      endpoint: config.apiUrl,
    }]
  }
});

render(
  <ReduxProvider store={store}>
    <Router> 
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('app')
);
