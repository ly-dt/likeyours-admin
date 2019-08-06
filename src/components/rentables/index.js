import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

import ActionButton from '../actionButton';

import { RentablesRepo } from '../../repository';

const Rentables = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await RentablesRepo.getRentables();
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
      title: 'Name',
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
      <ActionButton label="Add Rentable" callback={() => console.log('called!')} />
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default Rentables;
