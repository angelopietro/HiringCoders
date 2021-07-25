import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import { ContainerTable, SectionHeader, HeaderActions } from './style';
import ButtomCustom from '../../components/Buttons/Global';
import NoResults from '../../components/NoResults';

export default function ProductsList() {
  let history = useHistory();

  const redirectNewProduct = () => {
  history.push('/products/new');
  }

  let productList = JSON.parse(localStorage.getItem('@HC-Products') || '[]');

  return (

    <Container>

    <SectionHeader>
    <h2>Gerenciando Produtos</h2>

      <HeaderActions>
        <ButtomCustom onClick={redirectNewProduct}>
          CADASTRAR
        </ButtomCustom>
      </HeaderActions>
    </SectionHeader>

      <ContainerTable>

        {productList.length === 0 ? ( <NoResults /> ) : (
        <table>
        <thead>
        <tr>
        <th>CÓDIGO</th>
        <th>SKU</th>
        <th>PRODUTO</th>
        <th>ESTOQUE</th>
        </tr>
        </thead>

        <tbody>
        {productList.map((product,indice) =>
        <tr key={indice}>
          <td>{indice + 1}</td>
          <td>{product.productSku}</td>
          <td>{product.productName}</td>
          <td>{product.productStock}</td>
        </tr>
        )}
        </tbody>

      </table>
      )}

    </ContainerTable>

    </Container>
  );
}
