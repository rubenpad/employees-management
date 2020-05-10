import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import CategoryForm from '../components/Forms/CategoryForm';

const CREATE_CATEGORY = gql`
  mutation($input: CategoryInput) {
    createCategory(input: $input) {
      success
      error
      message
    }
  }
`;

const CreateCategory = () => {
  const [createCategory, { loading, error }] = useMutation(CREATE_CATEGORY);

  return (
    <CategoryForm
      title="Create Category"
      createOrUpdateCategory={createCategory}
      loading={loading}
      error={error}
    />
  );
};

export default CreateCategory;
