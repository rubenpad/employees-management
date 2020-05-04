import React from 'react';
import PropTypes from 'prop-types';

import { Item, Checkbox } from './styles';

const ProjectCategoriesListItem = ({ category }) => {
  return (
    <Item>
      <input type="checkbox" id={category.id} />
      <label htmlFor={category.id}>{category.name}</label>
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
