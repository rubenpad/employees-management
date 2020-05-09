import React from 'react';
import ProjectCategoriesList from '../ProjectCategoriesList';

import { Container } from './styles';

const Sidebar = ({ handleChange, categories }) => {
  return (
    <Container>
      <ProjectCategoriesList
        handleChange={handleChange}
        categories={categories}
      />
    </Container>
  );
};

export default Sidebar;
