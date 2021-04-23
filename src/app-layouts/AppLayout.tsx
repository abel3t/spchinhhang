import React from 'react';

import styled from 'styled-components';

import Header from './header/Header';
import Footer from './Footer';

const BodyWrapper = styled.div`
  background-color: #F4F4F4;
  padding: 15px 100px;
`;

const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header/>

      <BodyWrapper>
        {children}
      </BodyWrapper>

      <Footer/>
    </>
  );
};

export default AppLayout;