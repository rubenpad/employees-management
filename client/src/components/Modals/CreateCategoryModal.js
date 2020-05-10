import React from 'react';

import Modal from './Modal';
import CategoryForm from '../Forms/CategoryForm';

const CreateCategoryModal = ({
  modalMode,
  closeModal,
  loading,
  error,
  createCategory,
}) => {
  return (
    <Modal modalMode={modalMode} closeModal={closeModal}>
      <CategoryForm
        title="Create category"
        createOrUpdateCategory={createCategory}
        loading={loading}
        error={error}
      />
    </Modal>
  );
};

export default CreateCategoryModal;
