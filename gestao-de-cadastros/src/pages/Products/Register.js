import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/* BOOTSTRAP */
import { Container, Row, Col, Form, FloatingLabel } from 'react-bootstrap';

/* VALIDAÇÃO COM YUP*/
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

/* SCHEMAS PARA VALIDAÇÃO COM YUP */
import { validationSchema } from '../../schemas/Products';

/* TOAST DE ALERTA */
import toast from 'react-hot-toast';

/*COMPONENTES*/
import Footer from '../../components/Footer'

/* ESTILOS */
import { SectionHeader, HeaderActions } from './style';
import ButtomCustom from '../../components/Buttons/Global';
import ButtonSave from '../../components/Buttons/Submit';

export default function RegisterProduct() {

  let history = useHistory();

  const redirectListProducts = () => {
    history.push('/products');
  }

  const [store, setStore] = useState([]);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const submitForm = (data) => {

    try {
      let newData = JSON.stringify([...store || [], data])
      localStorage.setItem('@HC-Products', newData)
      setStore(JSON.parse(newData))
      toast.success('Produto cadastrado com sucesso!', {
        duration: 4000,
        position: 'bottom-right'
      });

    } catch (error) {
      toast.error(`${error.response.data.error}`, {
        duration: 4000,
        position: 'bottom-right'
      });
    }

  };
  return (

      <Container>

        <SectionHeader>
        <h1>Gerenciando Produtos</h1>

          <HeaderActions>
            <ButtomCustom onClick={redirectListProducts}>
              VOLTAR
            </ButtomCustom>
          </HeaderActions>
        </SectionHeader>

          <Form className="" onSubmit={handleSubmit(submitForm)}>
          <Row>
          <Col xs={12} md lg={2}>
            <FloatingLabel controlId="floatingInput" label="SKU *" className="mb-3">
              <Form.Control type="text" placeholder=" " {...register('productSku')} className={`${errors.productSku ? 'is-invalid' : ''}`} />
              <Form.Text className="text-danger">{errors.productSku?.message}</Form.Text>
            </FloatingLabel>
          </Col>
          <Col xs={12} md lg={10}>
            <FloatingLabel controlId="floatingInput" label="Nome *" className="mb-3">
              <Form.Control type="text" placeholder=" " {...register('productName')} className={`${errors.productName ? 'is-invalid' : ''}`} />
              <Form.Text className="text-danger">{errors.productName?.message}</Form.Text>
            </FloatingLabel>
          </Col>
          <Col xs={12} md lg={3} className="mb-3">
          <FloatingLabel controlId="floatingSelect" label="Categoria *">
              <Form.Select aria-label="Categoria *" {...register('productCategory')} className={`${errors.productCategory ? 'is-invalid' : ''}`}>
                <option value="infantil">Infantil</option>
                <option value="feminino">Feminino</option>
                <option value="masculino">Masculino</option>
                <option value="promocoes">Promoções</option>
              </Form.Select>
              <Form.Text className="text-danger">{errors.productCategory?.message}</Form.Text>
            </FloatingLabel>
          </Col>

            <Col xs={12} md lg={3} className="mb-3">
            <FloatingLabel controlId="floatingSelect" label="Estoque *">
            <Form.Control type="text" placeholder=" " {...register('productStock')} className={`${errors.productStock ? 'is-invalid' : ''}`} />
            <Form.Text className="text-danger">{errors.productStock?.message}</Form.Text>
            </FloatingLabel>
            </Col>
            <Col xs={12} md lg={3} className="mb-3">
            <FloatingLabel controlId="floatingSelect" label="Preço *">
            <Form.Control type="text" placeholder=" " {...register('productPrice')} className={`${errors.productPrice ? 'is-invalid' : ''}`} />
            <Form.Text className="text-danger">{errors.productPrice?.message}</Form.Text>
            </FloatingLabel>
            </Col>
            <Col xs={12} md lg={3} className="mb-3">
            <FloatingLabel controlId="floatingSelect" label="Preço Promocional">
            <Form.Control type="text" placeholder=" " {...register('productPromoPrice')} />
            </FloatingLabel>
            </Col>
            <Col xs={12}>
              <FloatingLabel controlId="floatingInput" label="Descrição *" className="mb-3">
                <Form.Control as="textarea" placeholder=" "  style={{ height: '150px' }}  {...register('productDescription')} className={`${errors.productDescription ? 'is-invalid' : ''}`} />
                <Form.Text className="text-danger">{errors.productDescription?.message}</Form.Text>
              </FloatingLabel>
            </Col>
           </Row>



            <Row><ButtonSave>CADASTRAR</ButtonSave></Row>

          </Form>
      </Container>

  );
}
