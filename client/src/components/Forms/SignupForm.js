import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Input } from '../Inputs';
import Loader from '../Loader';
import { FormContainer, Form, Button, Link } from './styles';

const SignupForm = ({ loading, error, signup }) => {
  return (
    <FormContainer>
      <h2>Sign up</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, 'Please enter a company name longer than three characters')
            .required('Company name is required'),
          email: Yup.string()
            .email(`That email address doesn't look right`)
            .required('Email address is required'),
          password: Yup.string()
            .min(8, 'Please set a password longer than eight characters')
            .matches(
              /[a-zA-Z0-9_!#%&]/,
              'Password must contains numbers, letters and symbols'
            )
            .required('Please enter a password'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          signup({ variables: { input: { ...values } } });
          setSubmitting(false);
        }}
      >
        <Form>
          <Input label="Company Name" id="name" name="name" type="text" />
          <Input label="Email" id="email" name="email" type="email" />
          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
          />
          {loading && <Loader />}
          <Button type="submit">Create account</Button>
        </Form>
      </Formik>
      <div>
        Already have an account?
        <Link to="/login">Login</Link>
      </div>
    </FormContainer>
  );
};

export default SignupForm;
