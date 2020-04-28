import React from 'react';

import { FormContainer, Form, Label, Button } from './styles';

const FormLogin = () => {
  return (
    <FormContainer>
      <Form>
        <Label htmlFor="username">
          Username
          <input type="text" id="username" required />
        </Label>

        <Label htmlFor="password">
          Password
          <input type="password" id="password" required />
        </Label>

        <Button type="submit">Login</Button>
      </Form>
    </FormContainer>
  );
};

export default FormLogin;
