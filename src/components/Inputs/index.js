import React from 'react';
import { useField } from 'formik';

import { Label, StyledSelect, Error } from './styles';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Label htmlFor={props.id || props.name}>
        {label}
        <input {...field} {...props} />
        {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
      </Label>
    </>
  );
};

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Label htmlFor={props.id || props.name}>
        {label}
        <StyledSelect {...field} {...props} />
        {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
      </Label>
    </>
  );
};

export { Input, Select };
