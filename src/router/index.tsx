import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../components/App';
import store from '../store';

export default (props: any) => (
  <Provider store={store} >
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </Router>
  </Provider>
);
