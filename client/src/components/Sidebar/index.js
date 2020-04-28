import React from 'react';
import ProjectCategoriesList from '../ProjectCategoriesList';

import { Container } from './styles';

const Sidebar = () => {
  return (
    <Container>
      <ProjectCategoriesList />
    </Container>
  );
};

export default Sidebar;
