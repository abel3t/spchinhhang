import React from 'react';

import Header from './header/Header';
import Footer from './Footer';

const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header/>
      <div className="lg:px-24 md:px-12 sm:px-10">
        {children}
      </div>
      <Footer/>
    </>
  );
};

export default AppLayout;