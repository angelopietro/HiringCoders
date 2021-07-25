import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './routes';

import ClientesList from '../pages/Clients/List';
import ClientesCreate from '../pages/Clients/Register';
import ProductsList from '../pages/Products/List';
import ProductsCreate from '../pages/Products/Register';
const Routes = () => {
  return (
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={ClientesList} />
              <Route path="/clients" exact component={ClientesList} />
              <Route path="/clients/new"   component={ClientesCreate}  />
              <Route path="/products" exact component={ProductsList} />
              <Route path="/products/new"   component={ProductsCreate}  />
            </Switch>
          </BrowserRouter>
  );
}

export default Routes;
