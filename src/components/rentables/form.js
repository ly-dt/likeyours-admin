import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';

import { createRentable, updateRentable } from '../../repository/rentables/';

const RentablesForm = props => {
  const { form, closeModalCallback, fetchDataCallback, formDataToSet, isFormEditing } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    form.validateFields(async (err, values) => {
      if (!err) {
        isFormEditing
          ? await updateRentable({ id: formDataToSet._id, ...values })
          : await createRentable(values);
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
        {getFieldDecorator('category', {
          rules: [{ required: true, message: 'Please enter the category' }],
        })(<Input placeholder="Category" size="large" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('station', {
          rules: [{ required: true, message: 'Please enter the station' }],
        })(<Input placeholder="Station" size="large" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('details', {
          rules: [{ required: true, message: 'Please enter details about the item' }],
        })(<Input placeholder="Details" size="large" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('price', {
          rules: [{ required: true, message: 'Please enter the price' }],
        })(<Input placeholder="Price" size="large" />)}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block size="large" loading={isSubmitting}>
          {isFormEditing ? 'Edit Rentable' : 'Create Rentable'}
        </Button>
      </Form.Item>
    </Form>
  );
};

const WrappedSRentablesForm = Form.create({ name: 'rentable_form' })(RentablesForm);

export default WrappedSRentablesForm;
