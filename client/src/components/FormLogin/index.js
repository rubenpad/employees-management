import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Input from '../../components/Input';
import { FormContainer, Form, Label, Button } from './styles';

const FormLogin = () => {
  return (
    <FormContainer>
      <h2>Login</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email(`That email address doesn't look right`)
            .required('Email address is required'),
          password: Yup.string().required('Please enter your password'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="example@mail.com"
          />
          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
          />
          <Button type="submit">Login</Button>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default FormLogin;
