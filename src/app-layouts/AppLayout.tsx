import React from 'react';

import Header from './header/Header';
import Footer from './Footer';

const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header/>

      {children}

      <Footer/>
    </>
  );
};

export default AppLayout;