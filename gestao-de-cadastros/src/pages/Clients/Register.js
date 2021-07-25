import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../schemas/Clients';

import { Container, Row, Col, Form, FloatingLabel } from 'react-bootstrap';
import { SectionHeader, HeaderActions } from './style';
import ButtomCustom from '../../components/Buttons/Global';
import ButtonSave from '../../components/Buttons/Submit';

import api from '../../services/Api';

export default function RegisterClient() {

  let history = useHistory();

  const redirectListClient = () => {
    history.push('/clients');
  }

  const [state, setState] = useState('');
  const [stateList, setStateList] = useState([]);
  const [city, setCity] = useState('');
  const [cityList, setCityList] = useState([]);


  const loadStates = () => {
    api.get('/estados')
      .then(response => response.data)
      .then(data => {
        data.sort((valueA, valueB) => valueA.nome.localeCompare(valueB.nome));
        setStateList([...data])
      })
  }

  const loadCities = (uf: string) => {
    api.get(`/estados/${uf}/municipios`)
      .then(response => response.data)
      .then(data => {
        data.sort((valueA, valueB) => valueA.nome.localeCompare(valueB.nome));
        setCityList([...data])
      })
  }
  useEffect(() => {
    loadStates();
  }, []);

  useEffect(
    () => {
      if (state) {
        loadCities(state);
      }
    },
    [state]
  );

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const submitForm = (data) => {

    try {

      let jsonData = {
              cpf: data.cpf,
              email: data.email,
              firstName: data.firstName,
              gender: data.gender,
              lastName: data.lastName,
              person: data.person,
              phone: data.phone,
              rg: data.rg,
              Adresses:[{
                        address: data.address,
                        number: data.number,
                        district: data.district,
                        city: data.city,
                        complement: data.complement,
                        state: data.state,
                        zipcode: data.zipcode,
              }]
      }

      const existingClients = localStorage.getItem('@HC-Clients') ? localStorage.getItem('@HC-Clients') : "[]";
      const arrayClient =  JSON.parse(existingClients);

      arrayClient.push(jsonData);
      localStorage.setItem('@HC-Clients', JSON.stringify(arrayClient));

      toast.success('Cliente cadastrado com sucesso!', {
        duration: 3000,
        position: 'bottom-right'
      });

      setTimeout(() =>{
        redirectListClient();
      },3500);


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
        <h1>Gerenciando Clientes</h1>

          <HeaderActions>
            <ButtomCustom onClick={redirectListClient}>
              VOLTAR
            </ButtomCustom>
          </HeaderActions>
        </SectionHeader>

          <Form className="" onSubmit={handleSubmit(submitForm)}>
          <Row>
            <Col xs={12} md lg={6}>
              <FloatingLabel controlId="floatingInput" label="Nome *" className="mb-3">
                <Form.Control type="text" placeholder=" " {...register('firstName')} className={`${errors.firstName ? 'is-invalid' : ''}`} />
                <Form.Text className="text-danger">{errors.firstName?.message}</Form.Text>
              </FloatingLabel>
            </Col>
            <Col xs={12} md lg={6}>
              <FloatingLabel controlId="floatingInput" label="Sobrenome *" className="mb-3">
                <Form.Control type="text" placeholder=" " {...register('lastName')} className={`${errors.lastName ? 'is-invalid' : ''}`} />
                <Form.Text className="text-danger">{errors.lastName?.message}</Form.Text>
              </FloatingLabel>
            </Col>
           </Row>

            <Row>
              <Col xs={12} md lg={6} className="mb-3">
                <FloatingLabel controlId="floatingSelect" label="Tipo de pessoa *">
                    <Form.Select  aria-label="Tipo de pessoa *" {...register('person')} className={`${errors.person ? 'is-invalid' : ''}`}>
                    <option value="fisica">Física</option>
                    <option value="jurídica">Jurídica</option>
                  </Form.Select>
                  <Form.Text className="text-danger">{errors.person?.message}</Form.Text>
                </FloatingLabel>
              </Col>
              <Col xs={12} md lg={6} className="mb-3">
              <FloatingLabel controlId="floatingSelect" label="Sexo *">
                  <Form.Select aria-label="Sexo *" {...register('gender')} className={`${errors.gender ? 'is-invalid' : ''}`}>
                    <option value="feminino">Feminino</option>
                    <option value="masculino">Masculino</option>
                  </Form.Select>
                  <Form.Text className="text-danger">{errors.gender?.message}</Form.Text>
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
            <Col>
              <FloatingLabel controlId="floatingInput" label="Seu e-mail *" className="mb-3">
                <Form.Control type="email" placeholder=" " {...register('email')} className={`${errors.email ? 'is-invalid' : ''}`} />
                <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
              </FloatingLabel>
            </Col>
            </Row>

            <Row>
              <Col xs={12} md lg={4}>
                <FloatingLabel controlId="floatingInput" label="CPF *" className="mb-3">
                  <Form.Control type="text" placeholder=" " {...register('cpf')} className={`${errors.cpf ? 'is-invalid' : ''}`} />
                  <Form.Text className="text-danger">{errors.cpf?.message}</Form.Text>
                </FloatingLabel>
              </Col>
              <Col xs={12} md lg={4}>
                <FloatingLabel controlId="floatingInput" label="RG" className="mb-3">
                  <Form.Control type="text" placeholder=" " {...register('rg')} />
                </FloatingLabel>
              </Col>
              <Col xs={12} md lg={4}>
                <FloatingLabel controlId="floatingInput" label="Celular *" className="mb-3">
                  <Form.Control type="text" placeholder=" " {...register('phone')} className={`${errors.phone ? 'is-invalid' : ''}`} />
                  <Form.Text className="text-danger">{errors.phone?.message}</Form.Text>
                </FloatingLabel>
              </Col>
            </Row>

            <hr />
            <Row className="mb-3">
            <h2>Endereço</h2>
            </Row>

            <Row>
            <Col xs={12} md lg={2}>
              <FloatingLabel controlId="floatingInput" label="CEP *" className="mb-3">
                <Form.Control type="text" placeholder=" " {...register('zipcode')} className={`${errors.zipcode ? 'is-invalid' : ''}`} />
                <Form.Text className="text-danger">{errors.zipcode?.message}</Form.Text>
              </FloatingLabel>
            </Col>
            <Col xs={12} md lg={8}>
              <FloatingLabel controlId="floatingInput" label="Endereço *" className="mb-3">
                <Form.Control type="text" placeholder=" " {...register('address')} className={`${errors.address ? 'is-invalid' : ''}`} />
                <Form.Text className="text-danger">{errors.address?.message}</Form.Text>
              </FloatingLabel>
            </Col>
            <Col xs={12} md lg={2}>
              <FloatingLabel controlId="floatingInput" label="Número *" className="mb-3">
                <Form.Control type="text" placeholder=" " {...register('number')} className={`${errors.number ? 'is-invalid' : ''}`} />
                <Form.Text className="text-danger">{errors.number?.message}</Form.Text>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md lg={4}>
              <FloatingLabel controlId="floatingInput" label="Bairro *" className="mb-3">
                <Form.Control type="text" placeholder=" " {...register('district')} className={`${errors.district ? 'is-invalid' : ''}`} />
                <Form.Text className="text-danger">{errors.district?.message}</Form.Text>
              </FloatingLabel>
            </Col>
              <Col xs={12} md lg={4} className="mb-3">
                <FloatingLabel controlId="floatingSelect" label="Estado *">
                  <Form.Select size="lg" aria-label="Estado *" {...register('state')} onChange={(e: any) => setState(e.target.value)} className={`${errors.state ? 'is-invalid' : ''}`}>
                    <option value="">Selecione um estado</option>
                    {stateList.map((uf, index) =>(
                    <option value={uf.sigla} key={index}>{uf.nome}</option>
                    ))}
                  </Form.Select>
                  <Form.Text className="text-danger">{errors.state?.message}</Form.Text>
                </FloatingLabel>
              </Col>
              <Col className="mb-3">
                <FloatingLabel controlId="floatingSelect" label="Cidade *">
                    <Form.Select size="lg" aria-label="Cidade *" value={city} {...register('city')} onChange={(e: any) => setCity(e.target.value)} className={`${errors.city ? 'is-invalid' : ''}`}>
                      {cityList.map((cidade, index) => (
                      <option value={cidade.nome} key={index}>{cidade.nome}</option>
                      ))}
                    </Form.Select>
                    <Form.Text className="text-danger">{errors.city?.message}</Form.Text>
                </FloatingLabel>
              </Col>
              <Col xs={12}>
                <FloatingLabel controlId="floatingInput" label="Complemento" className="mb-3">
                  <Form.Control type="text" placeholder=" " {...register('complement')}  />
                </FloatingLabel>
              </Col>
            </Row>

            <Row><ButtonSave>CADASTRAR</ButtonSave></Row>

          </Form>
      </Container>

  );
}
