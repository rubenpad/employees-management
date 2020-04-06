import React from 'react';
import PropTypes from 'prop-types';

const ProjectCategoriesListItem = ({ category = DEFAULT_CATEGORY }) => {
  return (
    <li>
      <h2>{category.name}</h2>
    </li>
  );
};

ProjectCategoriesListItem.defaultProps = {
  category: { id: 1, name: 'All categories', status: true },
};

ProjectCategoriesListItem.propTypes = {
  category: PropTypes.object,
};

export default ProjectCategoriesListItem;
