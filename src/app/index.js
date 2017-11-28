import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
import App from './App';
import ContactForm from './components/ContactForm/ContactForm';
import { Router, Route, hashHistory } from 'react-router'
import registerServiceWorker from './registerServiceWorker';

import configureStore from './redux/store';

const { Provider } = require('react-redux');
const store = configureStore();


ReactDOM.render(
  (<div className={styles.test}>
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/addContact" component={ContactForm}/>
        <Route path="/editContact" component={ContactForm}/>
      </Router>
    </Provider>
   </div>
  ), document.getElementById('root'));
registerServiceWorker();
