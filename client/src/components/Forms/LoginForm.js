import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Input } from '../Inputs';
import Loader from '../Loader'
import { FormContainer, Form, Button, Link } from './styles';

const LoginForm = ({ login, loading, error }) => {
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
          login({ variables: { input: { ...values } } });
          setSubmitting(false);
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
          {loading && <Loader />}
          <Button type="submit">Login</Button>
        </Form>
      </Formik>
      <div>
        No account?
        <Link to="/signup">Create one</Link>
      </div>
    </FormContainer>
  );
};

export default LoginForm;
