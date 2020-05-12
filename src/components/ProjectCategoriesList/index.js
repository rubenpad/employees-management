import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import useModal from '../../hooks/useModal';
import CreateCategory from '../../containers/CreateCategory';
import { ListContainer, Ul, ListHeader, Item, Checkbox } from './styles';

const DELETE_CATEGORY = gql`
  mutation($id: ID!) {
    deleteCategory(id: $id) {
      success
      error
      message
    }
  }
`;

const ProjectCategoriesList = ({ categories, handleChange }) => {
  const { mode, closeModal, openModal } = useModal();
  const [open, setOpen] = useState(false);
  const toggleMenu = () => (open ? setOpen(false) : setOpen(true));

  const [deleteCategory] = useMutation(DELETE_CATEGORY, {
    refetchQueries: ['getData'],
  });

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
        {categories.map(category => {
          const disabled = category.hasEmployee && category.hasEmployee;
          return (
            <Item key={category.id}>
              <input
                onChange={handleChange}
                name={category.name}
                type="checkbox"
                id={category.id}
              />
              <label htmlFor={category.id}>{category.name}</label>
              <svg
                display={disabled && `none`}
                onClick={() =>
                  deleteCategory({ variables: { id: category.id } })
                }
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
            </Item>
          );
        })}
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
