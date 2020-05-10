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
