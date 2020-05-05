import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Input from '../Input';
import { FormContainer, Form, Button, Link } from './styles';

const SignupForm = () => {
  return (
    <FormContainer>
      <h2>Sign up</h2>
      <Formik
        initialValues={{
          companyName: '',
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          companyName: Yup.string()
            .min(3, 'Please enter a company name longer than three characters')
            .required('Company name is required'),
          email: Yup.string()
            .email(`That email address doesn't look right`)
            .required('Email address is required'),
          password: Yup.string()
            .min(8, 'Please set a password longer than eight characters')
            .matches(/[a-zA-Z0-9_!#%&]/)
            .required('Please enter a password'),
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
            label="Company Name"
            id="companyName"
            name="companyName"
            type="text"
          />
          <Input label="Email" id="email" name="email" type="email" />
          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
          />

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
