import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProjectCategoriesListItem from '../ProjectCategoriesListItem';
import projectCategoriesMock from '../../__mocks__/projectCategoriesMock';
import { ListContainer, Ul, ListHeader } from './styles';

const ProjectCategoriesList = ({ categories }) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => (open ? setOpen(false) : setOpen(true));

  return (
    <ListContainer>
      <ListHeader>
        <h2>Project Categories</h2>
        <input onChange={toggleMenu} type="checkbox" id="toggle" />
        <label htmlFor="toggle">&#171;</label>
      </ListHeader>
      <Ul open={open}>
        {projectCategoriesMock.map(category => (
          <ProjectCategoriesListItem key={category.id} category={category} />
        ))}
      </Ul>
    </ListContainer>
  );
};

ProjectCategoriesList.defaultProps = {
  categories: [],
};

ProjectCategoriesList.propTypes = {
  categories: PropTypes.array,
};

export default ProjectCategoriesList;
