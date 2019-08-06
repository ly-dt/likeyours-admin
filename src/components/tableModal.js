import React from 'react';
import { Modal } from 'antd';

const TableModal = ({ visible, toggleModal, children }) => (
  <Modal
    title="Add Station"
    visible={visible}
    closable={true}
    onCancel={toggleModal}
    destroyOnClose={true}
    footer={null}
    maskClosable={false}
  >
    {children}
  </Modal>
);

export default TableModal;
