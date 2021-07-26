import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Content, Line } from './style';
import logo from '../../assets/images/gama-academy.png';

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
              <NavLink to="/clients" activeClassName="active">Gestão de Clientes</NavLink>
            </li>
            <li><Line /></li>
            <li>
              <NavLink to="/products" activeClassName="active">Gestão de Produtos</NavLink>
            </li>
          </ul>
        </nav>
      </Content>
    </Container>
  );
}
