import React, { useState, useEffect } from 'react';
import { Table, Button, Modal } from 'antd';

import StationForm from './form';
import Spacer from '../spacer';
import ActionButton from '../actionButton';
import TableModal from '../tableModal';

import useModal from '../../hooks/useModalHook';

import { StationsRepo } from '../../repository';

const { confirm } = Modal;

const Stations = () => {
  const { isModalVisible, toggleModal } = useModal();

  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  function showConfirm(value) {
    console.log(value);
    confirm({
      title: `Do you want to delete ${value.name}?`,
      onOk() {
        return new Promise(async (resolve, reject) => {
          try {
            await deleteData(value);
            fetchData();
            resolve();
          } catch (err) {
            reject();
          }
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  }

  const fetchData = async () => {
    try {
      const response = await StationsRepo.getStations();
      setData(response);
    } catch (err) {
      console.log(err);
    }
  };

  const addData = () => {
    setIsEditing(false);
    setFormData(null);
    toggleModal();
  };

  const editData = value => {
    setIsEditing(true);
    setFormData(value);
    toggleModal();
  };

  const deleteData = async value => {
    await StationsRepo.deleteStation(value._id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: 'Station Name',
      dataIndex: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Details',
      dataIndex: 'details',
    },
    {
      title: 'Actions',
      render: value => (
        <div style={{ display: 'flex' }}>
          <Button type="danger" shape="circle" icon="delete" onClick={() => showConfirm(value)} />
          <Spacer width={10} />
          <Button type="default" shape="circle" icon="edit" onClick={() => editData(value)} />
        </div>
      ),
    },
  ];

  return (
    <>
      <ActionButton label={'Add Station'} callback={addData} />
      <Table columns={columns} dataSource={data} />
      <TableModal
        visible={isModalVisible}
        toggleModal={toggleModal}
        label={isEditing ? 'Edit Station' : 'Add Station'}
      >
        <StationForm
          closeModalCallback={toggleModal}
          fetchDataCallback={fetchData}
          isFormEditing={isEditing}
          formDataToSet={formData}
        />
      </TableModal>
    </>
  );
};

export default Stations;
