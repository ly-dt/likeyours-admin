import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

import StationForm from './form';
import ActionButton from '../actionButton';
import TableModal from '../tableModal';

import useModal from '../../hooks/useModalHook';

import { StationsRepo } from '../../repository';

const Stations = () => {
  const [data, setData] = useState([]);
  const { isModalVisible, toggleModal } = useModal();
  const fetchData = async () => {
    try {
      const response = await StationsRepo.getStations();
      setData(response);
    } catch (err) {
      console.log(err);
    }
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
  ];

  return (
    <>
      <ActionButton label="Add Station" callback={toggleModal} />
      <Table columns={columns} dataSource={data} />
      <TableModal visible={isModalVisible} toggleModal={toggleModal}>
        <StationForm closeModalCallback={toggleModal} fetchDataCallback={fetchData} />
      </TableModal>
    </>
  );
};

export default Stations;
