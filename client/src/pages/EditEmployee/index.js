import React from 'react';

import UpdateEmployee from '../../containers/UpdateEmployee';
import { Container } from './styles';

const EditEmployee = props => {
  const {
    match: {
      params: { id },
    },
  } = props;

  return (
    <Container>
      <UpdateEmployee id={id} />
    </Container>
  );
};

export default EditEmployee;
