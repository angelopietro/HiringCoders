import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import { ContainerTable, SectionHeader, HeaderActions } from './style';
import ButtomCustom from '../../components/Buttons/Global';
import NoResults from '../../components/NoResults';

export default function ClientsList() {
  let history = useHistory();

  const redirectNewClient = () => {
  history.push('/clients/new');
  }

  let clientList = JSON.parse(localStorage.getItem('@HC-Clients') || '[]');
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
        {clientList.length === 0 ? ( <NoResults /> ) : (
        <table>
        <thead>
        <tr>
        <th>CÓDIGO</th>
        <th>CLIENTE</th>
        <th>EMAIL</th>
        </tr>
        </thead>

        <tbody>
          {clientList.map((client,indice) =>
        <tr key={indice}>
          <td>{indice + 1}</td>
          <td>{client.firstName} {client.lastName}</td>
          <td>{client.email}</td>
        </tr>
        )}
        </tbody>
        </table>
        )}

      </ContainerTable>

    </Container>
  );
}
