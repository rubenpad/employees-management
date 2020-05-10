import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Input } from '../Inputs';
import Loader from '../Loader';
import { FormContainer, Form, Button } from './styles';

const CategoryForm = ({ title, createOrUpdateCategory, loading, error }) => {
  return (
    <FormContainer>
      <h2>{title}</h2>
      <Formik
        initialValues={{
          name: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Category name is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          createOrUpdateCategory({ variables: { input: { ...values } } });
          setSubmitting(false);
        }}
      >
        <Form>
          <Input
            label="Category Name"
            id="name"
            name="name"
            type="text"
            placeholder="Design"
          />
          {loading && <Loader />}
          <Button type="submit">{title}</Button>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default CategoryForm;
