import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Outreach from './pages/OutreachPage';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Outreach} />
      </Switch>
    </BrowserRouter>
  );

}

export default App;
