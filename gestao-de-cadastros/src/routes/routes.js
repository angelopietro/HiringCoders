import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import DefaultLayout from '../pages/_Layouts/Admin';

const RouteWrapper = ({ component: Component, ...rest }) => {

return (
  <Route
    {...rest}
    render={props => (
      <DefaultLayout>
        <Component {...props} />
      </DefaultLayout>
    )}
  />
);
}
export default RouteWrapper;
