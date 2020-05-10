import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import CreateCategoryModal from '../components/Modals/CreateCategoryModal';

const CREATE_CATEGORY = gql`
  mutation($input: CategoryInput!) {
    createCategory(input: $input) {
      success
      error
      message
    }
  }
`;

const CreateCategory = ({ mode, openModal, closeModal }) => {
  const [createCategory, { loading, error }] = useMutation(CREATE_CATEGORY, {
    onCompleted(_) {
      window.location.reload();
    },
  });

  return (
    <CreateCategoryModal
      modalMode={mode}
      openModal={openModal}
      closeModal={closeModal}
      loading={loading}
      error={error}
      createCategory={createCategory}
    />
  );
};

export default CreateCategory;
