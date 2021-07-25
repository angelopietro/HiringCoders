import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ButtomCustom from '../../components/Buttons/Global';
import { ContainerTable, SectionHeader, HeaderActions } from './style';

export default function ClientsList() {
  let history = useHistory();

  const redirectNewClient = () => {
  history.push('/clients/new');
  }

  let clientList = JSON.parse(localStorage.getItem('hiringCodersClientes') || '[]');

  return (

    <Container>

    <SectionHeader>
    <h2>Gerenciando Clientes</h2>

      <HeaderActions>
        <ButtomCustom onClick={redirectNewClient}>
          CADASTRAR
        </ButtomCustom>
      </HeaderActions>
    </SectionHeader>

      <ContainerTable>
        <table>
        <thead>
        <tr>
        <th>Titulo</th>
        <th>Titulo</th>
        <th>Titulo</th>
        </tr>
        </thead>

        <tbody>
          {clientList.map((cliente,indice) =>
        <tr key={indice}>
          <td>{indice + 1}</td>
          <td>{cliente.firstName} {cliente.lastName}</td>
          <td>{cliente.firstName}</td>
        </tr>
        )}
        </tbody>

        </table>


</ContainerTable>

    </Container>
  );
}
