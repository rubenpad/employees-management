import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Input, Select } from '../Inputs';
import Loader from '../Loader';
import { FormContainerExtended, LargeForm, Button } from './styles';

const EmployeeForm = ({
  createOrUpdateEmployee,
  data,
  loading,
  error,
  title,
}) => {
  return (
    <FormContainerExtended>
      <h2>{title}</h2>
      <Formik
        initialValues={{
          firstName: data && data.employee ? data.employee.firstName : '',
          lastName: data && data.employee ? data.employee.lastName : '',
          email: data && data.employee ? data.employee.email : '',
          salary: data && data.employee ? data.employee.salary : '',
          city: data && data.employee ? data.employee.city : '',
          status: data && data.employee ? data.employee.status : '',
          categoryId:
            data && data.employee
              ? Number.parseInt(data.employee.categoryId)
              : '',
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
          city: Yup.string(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          createOrUpdateEmployee({
            variables: {
              input: {
                ...values,
                categoryId: Number.parseInt(values.categoryId),
              },
            },
          });
          setSubmitting(false);
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

          <Input label="City" id="city" name="city" type="text" />

          <Select label="Status" name="status">
            <option value="">Select status of employee</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </Select>

          <Select label="Category" name="categoryId">
            <option value="">Select a category</option>
            {data &&
              data.categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
          </Select>
          {error && <p>Oops! Something is wrong. Try again</p>}
          {loading && <Loader />}
          <Button type="submit">{title}</Button>
        </LargeForm>
      </Formik>
    </FormContainerExtended>
  );
};

export default EmployeeForm;
