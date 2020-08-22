import React from 'react';
import {
  Router,
  Switch,
  Route,

} from 'react-router-dom';

import { history } from './history';

import Calendar from '../components/calendar';

export default function Routes() {
  return (
    <Router history={history} forceRefresh>
      <Switch>
        <Route path="/" component={Calendar} exact />
        <Route path="/goals" exact>
          <div>Goals!</div>
        </Route>
        <Route path="*">
          <div>This was not supposed to show up.</div>
        </Route>
      </Switch>
    </Router>
  );
}
