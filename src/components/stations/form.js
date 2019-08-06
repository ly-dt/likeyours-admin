import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';

import { createStation, updateStation } from '../../repository/stations/';

const StationForm = props => {
  const { form, closeModalCallback, fetchDataCallback, formDataToSet, isFormEditing } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    form.validateFields(async (err, values) => {
      if (!err) {
        isFormEditing
          ? await updateStation({ id: formDataToSet._id, ...values })
          : await createStation(values);
        setIsSubmitting(false);
        closeModalCallback();
        fetchDataCallback();
      }
    });
  };

  const { getFieldDecorator } = form;
  useEffect(() => {
    if (formDataToSet) {
      const { name, address, details } = formDataToSet;
      form.setFields({
        name: {
          value: name,
        },
        address: {
          value: address,
        },
        details: {
          value: details,
        },
      });
    }
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
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
        <Button type="primary" htmlType="submit" block size="large" loading={isSubmitting}>
          {isFormEditing ? 'Edit Station' : 'Create Station'}
        </Button>
      </Form.Item>
    </Form>
  );
};

const WrappedStationForm = Form.create({ name: 'station_form' })(StationForm);

export default WrappedStationForm;
