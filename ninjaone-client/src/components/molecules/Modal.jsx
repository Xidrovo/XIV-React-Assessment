import React, { useRef } from 'react';
import { createPortal } from 'react-dom';

import useOnClickOutside from '@hooks/useOnClickOutside';
import CloseIcon from '@icons/CloseIcon';

const Modal = ({ children, isOpen, closeModal, title = 'title modal' }) => {
  const modalRef = useRef();
  const appRoot = document.getElementById('App-root');

  useOnClickOutside(modalRef, () => {
    closeModal();
  });

  return (
    isOpen &&
    createPortal(
      <div
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-600 bg-opacity-50"
        data-testid="modal-test-id"
      >
        <div ref={modalRef} className="p-6 bg-white rounded shadow-md md:min-w-md">
          <div className="flex justify-between items-center pb-5">
            <h1 className=" font-medium text-2xl text-gray-800">{title}</h1>
            <div
              className="p-3 rounded cursor-pointer hover:bg-hover-button"
              onClick={() => {
                closeModal();
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>,
      appRoot
    )
  );
};

export default Modal;
