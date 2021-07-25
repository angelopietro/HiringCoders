import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/* BOOTSTRAP */
import { Container, Row, Col, Form, FloatingLabel } from 'react-bootstrap';

/* VALIDAÇÃO COM YUP*/
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

/* SCHEMAS PARA VALIDAÇÃO COM YUP */
import { validationSchema } from '../../schemas/Clients';

/* TOAST DE ALERTA */
import toast from 'react-hot-toast';

/*COMPONENTES*/
import Footer from '../../components/Footer'

/*API*/
import api from '../../services/Api';

/* ESTILOS */
import { SectionHeader, HeaderActions } from './style';
import ButtomCustom from '../../components/Buttons/Global';
import ButtonSave from '../../components/Buttons/Submit';

export default function RegisterClient() {

  let history = useHistory();

  const redirectListClient = () => {
    history.push('/clients');
  }

  const [state, setState] = useState('');
  const [stateList, setStateList] = useState([]);
  const [city, setCity] = useState('');
  const [cityList, setCityList] = useState([]);
  const [store, setStore] = useState([]);

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

  const submitForm = (data: ClientsProps) => {

    try {
      let newData = JSON.stringify([...store || [], data])
      localStorage.setItem('hiringCodersClientes', newData)
      setStore(JSON.parse(newData))
      toast.success('Cliente cadastrado com sucesso!', {
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
        <h2>Gerenciando Clientes</h2>

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
                <Form.Control type="text" placeholder=" " {...register('firstName')} className="{`${errors.firstName ? 'is-invalid' : ''}`}" />
                <Form.Text className="isInvalidText">{errors.firstName?.message}</Form.Text>
              </FloatingLabel>
            </Col>
            <Col xs={12} md lg={6}>
              <FloatingLabel controlId="floatingInput" label="Sobrenome *" className="mb-3">
                <Form.Control type="text" placeholder=" " {...register('lastName')} className="{`${errors.lastName ? 'is-invalid' : ''}`}" />
                <Form.Text className="isInvalidText">{errors.lastName?.message}</Form.Text>
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
                  <Form.Text className="isInvalidText">{errors.person?.message}</Form.Text>
                </FloatingLabel>
              </Col>
              <Col xs={12} md lg={6} className="mb-3">
              <FloatingLabel controlId="floatingSelect" label="Sexo *">
                  <Form.Select aria-label="Sexo *" {...register('gender')} className={`${errors.gender ? 'is-invalid' : ''}`}>
                    <option value="feminino">Feminino</option>
                    <option value="masculino">Masculino</option>
                  </Form.Select>
                  <Form.Text className="isInvalidText">{errors.gender?.message}</Form.Text>
                </FloatingLabel>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md lg={6} className="mb-3">
                <FloatingLabel controlId="floatingSelect" label="Estado *">
                  <Form.Select size="lg" aria-label="Estado *" {...register('state')} onChange={(e: any) => setState(e.target.value)} className={`${errors.state ? 'is-invalid' : ''}`}>
                    <option value="">Selecione um estado</option>
                    {stateList.map((uf, index) =>(
                    <option value={uf.sigla} key={index}>{uf.nome}</option>
                    ))}
                  </Form.Select>
                  <Form.Text className="isInvalidText">{errors.state?.message}</Form.Text>
                </FloatingLabel>
              </Col>
              <Col className="mb-3">
                <FloatingLabel controlId="floatingSelect" label="Cidade *">
                    <Form.Select size="lg" aria-label="Cidade *" {...register('city')} onChange={(e: any) => setCity(e.target.value)} className={`${errors.city ? 'is-invalid' : ''}`}>
                      {cityList.map((cidade, index) => (
                      <option value={cidade.nome} key={index}>{cidade.nome}</option>
                      ))}
                    </Form.Select>
                    <Form.Text className="isInvalidText">{errors.city?.message}</Form.Text>
                </FloatingLabel>
              </Col>
            </Row>

            <Row>
            <Col>
              <FloatingLabel controlId="floatingInput" label="Seu e-mail *" className="mb-3">
                <Form.Control type="email" placeholder=" " {...register('email')} className="{`${errors.email ? 'is-invalid' : ''}`}" />
                <Form.Text className="isInvalidText">{errors.email?.message}</Form.Text>
              </FloatingLabel>
            </Col>
            </Row>

            <Row>
              <Col xs={12} md lg={4}>
                <FloatingLabel controlId="floatingInput" label="CPF *" className="mb-3">
                  <Form.Control type="text" placeholder=" " {...register('cpf')} className="{`${errors.cpf ? 'is-invalid' : ''}`}" />
                  <Form.Text className="isInvalidText">{errors.cpf?.message}</Form.Text>
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
                  <Form.Text className="isInvalidText">{errors.phone?.message}</Form.Text>
                </FloatingLabel>
              </Col>
            </Row>

            <Row>
              <ButtonSave>CADASTRAR</ButtonSave>
            </Row>
            
          </Form>


      </Container>

  );
}
