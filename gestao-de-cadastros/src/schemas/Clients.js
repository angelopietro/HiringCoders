
import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Por favor, preencha o nome'),
  lastName: Yup.string().required('Por favor, preencha o sobrenome'),
  person: Yup.string().ensure().required('Por favor, selecione tipo de pessoa'),
  gender: Yup.string().ensure().required('Por favor, selecione o Sexo'),
  email: Yup.string()
    .email('Por favor, preencha um e-mail válido')
    .required('Por favor, preencha o e-mail'),
  cpf: Yup.string().required('Por favor, preencha o CPF'),
  phone: Yup.string().required('Por favor, preencha o Telefone'),
  zipcode: Yup.string().required('Por favor, preencha o CEP'),
  address: Yup.string().required('Por favor, preencha o Endereço'),
  number: Yup.string().required('Por favor, preencha o Número'),
  district: Yup.string().required('Por favor, preencha o Bairro'),
  state: Yup.string().ensure().required('Por favor, selecione um estado'),
  city: Yup.string().ensure().required('Por favor, selecione uma cidade'),
});
