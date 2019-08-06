import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

import ActionButton from '../actionButton';

import { UsersRepo } from '../../repository';

const Users = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await UsersRepo.getUsers();
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
      title: 'First Name',
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
  return <Table columns={columns} dataSource={data} />;
};

export default Users;
