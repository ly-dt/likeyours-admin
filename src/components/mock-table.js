import React from 'react';
import { Table } from 'antd';

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

const MockTable = () => <Table columns={columns} dataSource={data} />;

export default MockTable;
