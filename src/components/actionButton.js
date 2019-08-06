import React from 'react';
import { Button } from 'antd';

const ActionButton = ({ label, callback }) => (
  <div style={{ padding: 10, display: 'flex', flexDirection: 'row-reverse' }}>
    <Button type="primary" onClick={callback}>
      {label}
    </Button>
  </div>
);

export default ActionButton;
