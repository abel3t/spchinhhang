import React from 'react';

import Header from './header/Header';

const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header/>

      {children}
    </>
  );
};

export default AppLayout;