import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ListContainer, Ul, ListHeader, Item, Checkbox } from './styles';

const ProjectCategoriesList = ({ categories, handleChange }) => {
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
        {categories.map(category => (
          <Item key={category.id}>
            <input
              onChange={handleChange}
              name={category.name}
              type="checkbox"
              id={category.id}
            />
            <label htmlFor={category.id}>{category.name}</label>
          </Item>
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
