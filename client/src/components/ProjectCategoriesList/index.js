import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useModal from '../../hooks/useModal';
import CreateCategory from '../../containers/CreateCategory';
import { ListContainer, Ul, ListHeader, Item, Checkbox } from './styles';

const ProjectCategoriesList = ({ categories, handleChange }) => {
  const { mode, closeModal, openModal } = useModal();
  const [open, setOpen] = useState(false);
  const toggleMenu = () => (open ? setOpen(false) : setOpen(true));

  return (
    <ListContainer>
      <ListHeader>
        <div>
          <h2>Project Categories</h2>
          <button type="button" onClick={openModal}>
            Add category
          </button>
          <CreateCategory
            mode={mode}
            closeModal={closeModal}
            openModal={openModal}
          />
        </div>
        <input onChange={toggleMenu} type="checkbox" id="toggle" />
        <label htmlFor="toggle">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
          </svg>
        </label>
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
