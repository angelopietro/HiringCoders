import React from "react";
import { Toaster} from 'react-hot-toast';

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import {Wrapper} from './style';


const DefaultLayout = ({ children }) => {

  return (
    <Wrapper>
      <Header />
       {children}
       <Footer />
       <Toaster />
     </Wrapper>
  );
}
export default DefaultLayout;
