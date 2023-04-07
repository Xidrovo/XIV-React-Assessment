import React from 'react';

import Modal from './Modal';
import Button from '@atoms/Button';

const DeleteModal = ({ isOpen, closeModal, systemName, onDelete }) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal} title="Delete Device?">
      <p className=" text-gray-800 font-normal text-sm">
        You are about to delete the device <strong>{systemName}</strong>. This action cannot be
        undone.
      </p>
      <div className="w-full flex justify-end mt-8 space-x-4">
        <Button buttonKind="secondary" onClick={closeModal}>
          Cancel
        </Button>
        <Button buttonKind="warning" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
