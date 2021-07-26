import React from 'react';
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultStyle from './styles/global';

function App() {
  const history = createBrowserHistory();
  return (
      <Router history={history}>
        <Routes />
        <DefaultStyle />
      </Router>
  );
}

export default App;
