import React from 'react';
import { Helmet } from 'react-helmet';

import UpdateEmployee from '../../containers/UpdateEmployee';
import { Container } from './styles';

const EditEmployee = props => {
  const {
    match: {
      params: { id },
    },
  } = props;

  return (
    <>
      <Helmet>
        <title>MGC - Edit Employee</title>
      </Helmet>
      <Container>
        <UpdateEmployee id={id} />
      </Container>
    </>
  );
};

export default EditEmployee;
