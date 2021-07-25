
import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  productSku: Yup.string().required('Por favor, preencha o SKU'),
  productName: Yup.string().required('Por favor, preencha o Nome'),
  productCategory: Yup.string().ensure().required('Por favor, selecione uma categoria'),
  productStock: Yup.string().ensure().required('Por favor, preencha uma quantidade'),
  productPrice: Yup.string().required('Por favor, preencha o Preço'),
  productDescription: Yup.string().required('Por favor, preencha a descrição')
});
