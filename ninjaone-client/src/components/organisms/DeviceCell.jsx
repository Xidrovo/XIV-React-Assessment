import React, { useState, useRef, useContext } from 'react';
import SharedDashboardContext from '@context/SharedDashboardContext';

import useOnClickOutside from '@hooks/useOnClickOutside';
import useApi from '@hooks/useAPI';

import DotsIcon from '@icons/DotsIcon';
import WindowsIcon from '@icons/WindowsIcon';
import MacIcon from '@icons/MacIcon';
import LinuxIcon from '@icons/LinuxIcon';

import DeleteModal from '@molecules/DeleteModal';
import EditModal from '@molecules/EditModal';

const DeviceCell = ({ systemName = '', deviceType = '', capacity = 0, id }) => {
  const { dispatch } = useContext(SharedDashboardContext);

  const [openMenu, setOpenMenu] = useState(false);
  const [openDelModal, setOpenDelModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const { delApi } = useApi('/api');

  const menuRef = useRef();

  const deviceTypeOptions = [
    { value: 'windows', label: 'Windows' },
    { value: 'mac', label: 'Mac' },
    { value: 'linux', label: 'Linux' },
  ];

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

  const deleteCell = async () => {
    await delApi(`/devices/${id}`);
    dispatch({
      type: 'DEL_DEVICE',
      payload: id,
    });
    setOpenDelModal(false);
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
      <DeleteModal
        isOpen={openDelModal}
        closeModal={closeModal}
        title="Delete Device?"
        onDelete={deleteCell}
        systemName={systemName}
      />
      <EditModal
        isOpen={openEditModal}
        closeModal={closeModal}
        title="Edit device"
        systemName={systemName}
        deviceType={deviceTypeOptions.find(a => a.value.toUpperCase() === deviceType.toUpperCase())}
        capacity={capacity}
        id={id}
        options={deviceTypeOptions}
      />
    </React.Fragment>
  );
};

export default DeviceCell;
