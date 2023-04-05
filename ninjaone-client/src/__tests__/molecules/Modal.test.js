import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '@molecules/Modal';

const RenderTestModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      Modal content
    </Modal>
  );
};

describe('Modal Molecule', () => {
  let appRoot;

  beforeEach(() => {
    appRoot = document.createElement('div');
    appRoot.setAttribute('id', 'App-root');
    document.body.appendChild(appRoot);
  });
  afterEach(() => {
    document.body.removeChild(appRoot);
  });

  it('does not render the modal when is not open as true', () => {
    render(<Modal isOpen={false} />);
    const modalElement = screen.queryByTestId('modal-test-id');
    expect(modalElement).not.toBeInTheDocument();
  });

  it('does render the modal when isOpen as true', () => {
    render(<Modal isOpen={true} onClose={() => {}} />);
    const modalElement = screen.getByTestId('modal-test-id');
    expect(modalElement).toBeInTheDocument();
  });

  it('renders the modal content', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <p>Modal content</p>
      </Modal>
    );
    const contentElement = screen.getByText('Modal content');
    expect(contentElement).toBeInTheDocument();
  });

  xit('should close the modal if is clicked outside', () => {
    const { getByText } = render(<RenderTestModal />);

    const contentElement = getByText('Modal content');
    expect(contentElement).toBeInTheDocument();

    fireEvent.click(appRoot);
    expect(contentElement).not.toBeInTheDocument();
  });
});
