import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Input, Select } from '../Inputs';
import { FormContainerExtended, LargeForm, Button } from './styles';

const EmployeeForm = ({ title }) => {
  return (
    <FormContainerExtended>
      <h2>{title}</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          salary: '',
          birthDate: '',
          city: '',
          contractType: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(3, 'Please enter a employee name longer than three characters')
            .matches(/[a-zA-Z]/, 'Enter a valid name')
            .required('Employee name is required'),
          lastName: Yup.string()
            .min(3, 'Please enter a employee name longer than three characters')
            .matches(/[a-zA-Z]/, 'Enter a valid name')
            .required('Employee name is required'),
          email: Yup.string()
            .email(`That email doesn't look right`)
            .required('Email address is required'),
          salary: Yup.number().min(4).required('Employee salary is required'),
          birthDate: Yup.date().required('Birth date is required'),
          city: Yup.string(),
          contractType: Yup.string()
            .oneOf(['fullTime', 'partTime'])
            .required('Contract type is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          });
        }}
      >
        <LargeForm>
          <Input
            label="First name"
            id="firstName"
            name="firstName"
            type="text"
          />
          <Input label="Last name" id="lastName" name="lastName" type="text" />
          <Input label="Email" id="email" name="email" type="email" />
          <Input label="Salary" id="salary" name="salary" type="number" />
          <Input
            label="Birth date"
            id="birthDate"
            name="birthDate"
            type="text"
            placeholder="yyyy/mm/dd"
          />

          <Select label="Contract type" name="contractType">
            <option value="">Select type of contract</option>
            <option value="fullTime">Full time</option>
            <option value="partTime">Part time</option>
          </Select>

          <Select label="City" name="city">
            <option value="">Select a city</option>
            <option value="bogota">Bogotá</option>
            <option value="medellin">Medellin</option>
            <option value="villavicencio">Villavicencio</option>
          </Select>

          <Select label="Status" name="status">
            <option value="">Select status of employee</option>
            <option value="activate">Active</option>
            <option value="inactive">Inactive</option>
          </Select>
          <Button type="submit">{title}</Button>
        </LargeForm>
      </Formik>
    </FormContainerExtended>
  );
};

export default EmployeeForm;
