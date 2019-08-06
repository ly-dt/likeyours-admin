import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

import { createStation } from '../../repository/stations/';

const CreateStationForm = props => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    props.form.validateFields(async (err, values) => {
      if (!err) {
        await createStation(values);
        setIsSubmitting(false);
        props.closeModalCallback();
        props.fetchDataCallback();
      }
    });
  };

  const { getFieldDecorator } = props.form;
  console.log(props);
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Please enter the name' }],
        })(<Input placeholder="Name" size="large" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('address', {
          rules: [{ required: true, message: 'Please enter the station address' }],
        })(<Input placeholder="Address" size="large" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('details', {
          rules: [{ required: true, message: 'Please enter details about the station' }],
        })(<Input placeholder="Details" size="large" />)}
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          block
          size="large"
          loading={isSubmitting}
        >
          Create Station
        </Button>
      </Form.Item>
    </Form>
  );
};

const WrappedNormalLoginForm = Form.create({ name: 'create_station' })(CreateStationForm);

export default WrappedNormalLoginForm;
