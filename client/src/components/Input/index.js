import React from 'react';
import { useField } from 'formik';

import { Label, Error } from './styles';

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

export default Input;
