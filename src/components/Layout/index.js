import React from 'react';

import Header from '../Header';

const Layout = ({ children, isAuth }) => (
  <>
    {isAuth ? (
      <>
        <Header />
        {children}
      </>
    ) : (
      <>{children}</>
    )}
  </>
);

export default Layout;
