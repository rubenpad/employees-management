import React from 'react';
import PropTypes from 'prop-types';
import ProjectCategoriesListItem from '../ProjectCategoriesListItem';

const ProjectCategoriesList = ({ categories }) => {
  return (
    <div>
      <div>
        <h2>Project Categories</h2>
        <ul>
          {categories.map(category => (
            <ProjectCategoriesListItem key={category.id} category={category} />
          ))}
        </ul>
      </div>
    </div>
  );
};

ProjectCategoriesList.defaultProps = {
  categories: [],
};

ProjectCategoriesList.propTypes = {
  categories: PropTypes.array,
};

export default ProjectCategoriesList;
