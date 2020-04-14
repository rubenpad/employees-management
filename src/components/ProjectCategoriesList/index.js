import React from 'react';
import PropTypes from 'prop-types';
import ProjectCategoriesListItem from '../ProjectCategoriesListItem';
import projectCategoriesMock from '../../__mocks__/projectCategoriesMock';
import { ListContainer, Content } from './styles';

const ProjectCategoriesList = ({ categories }) => {
  return (
    <ListContainer>
      <Content>
        <h2>Project Categories</h2>
        <ul>
          {projectCategoriesMock.map(category => (
            <ProjectCategoriesListItem key={category.id} category={category} />
          ))}
        </ul>
      </Content>
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
