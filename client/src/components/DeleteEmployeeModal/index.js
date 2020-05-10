import React from 'react';

import Modal from '../Modal';
import Loader from '../Loader';
import { ModalDelete, Button, Error } from './styles';

const DeleteEmployeeModal = ({
  modalMode,
  closeModal,
  loading,
  error,
  deleteEmployee,
}) => {
  return (
    <Modal modalMode={modalMode} closeModal={closeModal}>
      <ModalDelete>
        <h1>Are you sure?</h1>
        <p>You are about to delete this employee.</p>
        {loading && <Loader />}
        <div>
          <Button onClick={closeModal}>CANCEL</Button>
          <Button danger onClick={deleteEmployee}>
            DELETE
          </Button>
        </div>
        {error && <Error>Error try again</Error>}
      </ModalDelete>
    </Modal>
  );
};

export default DeleteEmployeeModal;
