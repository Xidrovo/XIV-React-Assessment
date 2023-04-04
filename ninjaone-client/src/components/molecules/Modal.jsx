import React, { useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const Modal = () => {
  const modalRef = useRef();

  useOnClickOutside(modalRef, () => {
    console.log('clicked Outside?!');
  });

  return <div ref={modalRef}>This is a modal componentr</div>;
};

export default Modal;
