import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './routes';

import ClientesList from '../pages/Clients/List';
import ClientesCreate from '../pages/Clients/Register';

const Routes = () => {
  return (
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={ClientesList} />
              <Route path="/clients" exact component={ClientesList} />
              <Route path="/clients/new"   component={ClientesCreate}  />
            </Switch>
          </BrowserRouter>
  );
}

export default Routes;
