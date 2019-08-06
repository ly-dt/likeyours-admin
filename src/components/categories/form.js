import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';

import { createCategory, updateCategory } from '../../repository/categories/';

const CategoryForm = props => {
  const { form, closeModalCallback, fetchDataCallback, formDataToSet, isFormEditing } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    form.validateFields(async (err, values) => {
      if (!err) {
        isFormEditing
          ? await updateCategory({ id: formDataToSet._id, ...values })
          : await createCategory(values);
        setIsSubmitting(false);
        closeModalCallback();
        fetchDataCallback();
      }
    });
  };

  const { getFieldDecorator } = form;
  useEffect(() => {
    if (formDataToSet) {
      const { name } = formDataToSet;
      form.setFields({
        name: {
          value: name,
        },
      });
    }
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Please enter a category name' }],
        })(<Input placeholder="Name" size="large" />)}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block size="large" loading={isSubmitting}>
          {isFormEditing ? 'Edit Category' : 'Create Category'}
        </Button>
      </Form.Item>
    </Form>
  );
};

const WrappedCategoryForm = Form.create({ name: 'category_form' })(CategoryForm);

export default WrappedCategoryForm;
