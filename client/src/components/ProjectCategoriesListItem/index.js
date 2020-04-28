import React from 'react';
import PropTypes from 'prop-types';

import { Item } from './styles';

const ProjectCategoriesListItem = ({ category }) => {
  return (
    <Item>
      <h3>{category.name}</h3>
    </Item>
  );
};

ProjectCategoriesListItem.defaultProps = {
  category: { id: 1, name: 'All categories', status: true },
};

ProjectCategoriesListItem.propTypes = {
  category: PropTypes.object,
};

export default ProjectCategoriesListItem;
