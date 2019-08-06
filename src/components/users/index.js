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

  // "first_name": "Franz",
  //     "last_name": "Palngipang",
  //     "birthday": "1998-08-23T00:00:00.000Z",
  //     "address": "Fort Victoria Condominium",
  //     "mobile": "+639562663868",
  //     "email": "franz@appallnight.dev",

  return (
    <>
      <ActionButton label="Add User" callback={() => console.log('called!')} />
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default Users;
