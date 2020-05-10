import React from 'react';
import { Helmet } from 'react-helmet';

import CreateEmployee from '../../containers/CreateEmployee';
import { Container } from './styles';

const NewEmployee = () => {
  return (
    <>
      <Helmet>
        <title>MGC - New Employee</title>
      </Helmet>
      <Container>
        <CreateEmployee />
      </Container>
    </>
  );
};

export default NewEmployee;
