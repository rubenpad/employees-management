import { useState } from 'react';

const useModal = () => {
  const [modalMode, setModalMode] = useState({ visible: false });
  const openModal = () => setModalMode({ visible: true });
  const closeModal = () => setModalMode({ visible: false });

  return {
    openModal,
    closeModal,
    mode: modalMode.visible,
  };
};

export default useModal;
