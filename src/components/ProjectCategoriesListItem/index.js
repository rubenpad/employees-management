import React from 'react';

const DEFAULT_CATEGORY = { id: 1, name: 'Fake', status: true };

const ProjectCategoriesListItem = ({ category = DEFAULT_CATEGORY }) => {
  return (
    <li>
      <h2>{category.name}</h2>
    </li>
  );
};

export default ProjectCategoriesListItem;
