import React, { useState, useRef } from 'react';

import DotsIcon from '@icons/DotsIcon';
import WindowsIcon from '@icons/WindowsIcon';
import MacIcon from '@icons/MacIcon';
import LinuxIcon from '@icons/LinuxIcon';

import Button from '@atoms/Button';

import LabeledInput from './LabeledInput';
import LabeledSelect from './LabeledSelect';
import Modal from './Modal';

import useOnClickOutside from '@hooks/useOnClickOutside';

const DeviceCell = ({ systemName = '', deviceType = '', capacity = 0 }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDelModal, setOpenDelModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const menuRef = useRef();

  const toggleDelModal = () => {
    setOpenMenu(false);
    setOpenDelModal(!openDelModal);
  };

  const toggleEditModal = () => {
    setOpenMenu(false);
    setOpenEditModal(!openEditModal);
  };

  const closeModal = () => {
    setOpenDelModal(false);
    setOpenEditModal(false);
  };

  const getIconByType = deviceType => {
    switch (deviceType.toUpperCase()) {
      case 'WINDOWS':
        return <WindowsIcon />;
      case 'MAC':
        return <MacIcon />;
      case 'LINUX':
        return <LinuxIcon />;
      default:
        return <WindowsIcon />;
    }
  };

  useOnClickOutside(menuRef, () => {
    if (openMenu) {
      toggleMenu();
    }
  });

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleMouseLeave = () => {
    if (openMenu) {
      toggleMenu();
    }
  };
  return (
    <React.Fragment>
      <tr className="hover:bg-table-hover group " onMouseLeave={handleMouseLeave}>
        <td className="py-2 pl-3 flex justify-between items-center">
          <div>
            <div className="flex justify-start items-center">
              {getIconByType(deviceType)}
              <p className="ml-1 text-gray-800 font-medium">{systemName}</p>
            </div>
            <p className="text-gray-500 text-xs font-normal">
              {deviceType} workstation - {capacity} GB
            </p>
          </div>
          <div className="relative">
            <div
              className="rounded cursor-pointer p-2 py-3 opacity-0 group-hover:opacity-100 transition-opacity mr-2 hover:bg-hover-button "
              onClick={() => toggleMenu()}
            >
              <DotsIcon />
            </div>
            {openMenu && (
              <div className="absolute bg-red-500 z-10 rounded top-8 right-2 border" ref={menuRef}>
                <ul className=" bg-white w-32">
                  <li
                    className="text-third py-2 pl-3 hover:bg-table-hover cursor-pointer"
                    onClick={toggleEditModal}
                  >
                    Edit
                  </li>
                  <li
                    className="text-warning py-2 pl-3 hover:bg-table-hover cursor-pointer"
                    onClick={toggleDelModal}
                  >
                    Delete
                  </li>
                </ul>
              </div>
            )}
          </div>
        </td>
      </tr>
      <Modal isOpen={openDelModal} closeModal={closeModal} title="Delete Device?">
        <p className=" text-gray-800 font-normal text-sm">
          You are about to delete the device {systemName}. This action cannot be undone.
        </p>
        <div className="w-full flex justify-end mt-8 space-x-4">
          <Button buttonKind="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button buttonKind="warning">Delete</Button>
        </div>
      </Modal>
      <Modal isOpen={openEditModal} closeModal={closeModal} title="Edit device">
        <div className="flex flex-col space-y-4">
          <LabeledInput labelText="System name *" />
          <LabeledSelect placeholder="Select type" labelText="Device type *" />
          <LabeledInput labelText="HDD capacity (GB) *" />
        </div>
        <div className="w-full flex justify-end mt-8 space-x-4">
          <Button
            buttonKind="secondary"
            onClick={() => {
              closeModal();
            }}
          >
            Cancel
          </Button>
          <Button buttonKind="primary">Submit</Button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default DeviceCell;
