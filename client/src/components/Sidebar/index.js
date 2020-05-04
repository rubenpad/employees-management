import React from 'react';
import ProjectCategoriesList from '../ProjectCategoriesList';

import { Container } from './styles';

import projectCategoriesMock from '../../__mocks__/projectCategoriesMock';

const Sidebar = ({ handleChange }) => {
  return (
    <Container>
      <ProjectCategoriesList
        handleChange={handleChange}
        categories={projectCategoriesMock}
      />
    </Container>
  );
};

export default Sidebar;
