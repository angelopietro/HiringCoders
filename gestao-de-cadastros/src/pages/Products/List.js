import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ButtomCustom from '../../components/Buttons/Global';
import { ContainerTable, SectionHeader, HeaderActions } from './style';

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
        <table>
        <thead>
        <tr>
        <th>Titulo</th>
        <th>Titulo</th>
        <th>Titulo</th>
        </tr>
        </thead>

        <tbody>
          {productList.map((product,indice) =>
        <tr key={indice}>
          <td>{indice + 1}</td>
          <td>{product.productSku} {product.productName}</td>
          <td>{product.productStock}</td>
        </tr>
        )}
        </tbody>

        </table>


</ContainerTable>

    </Container>
  );
}
