import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Table } from 'react-bootstrap';

import logo from '../../assets/images/gama-academy.png';
import { Content, Line } from './style';

export default function Header() {

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="Gama Academy" />
          </Link>
          <Line />
          <ul>
            <li>
              <NavLink to="/clients" activeClassName="active">Clientes</NavLink>
            </li>
            <li><Line /></li>
            <li>
              <NavLink to="/products" activeClassName="active">Produtos</NavLink>
            </li>
          </ul>
        </nav>
      </Content>
    </Container>
  );
}
