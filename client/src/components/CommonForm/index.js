import React from 'react';

import { FormContainer, Form, Label, Input, Select, Button } from './styles';

const CommonForm = ({ title }) => {
  return (
    <FormContainer>
      <h1>{title}</h1>
      <Form>
        <Label htmlFor="firstName">
          First name
          <Input type="text" name="firstName" id="firstName" required />
        </Label>

        <Label htmlFor="lastName">
          Last name
          <Input type="text" name="lastName" id="lastName" />
        </Label>

        <Label htmlFor="email">
          Email
          <Input type="email" name="email" id="email" />
        </Label>

        <Label htmlFor="phone">
          Phone
          <Input type="number" name="phone" id="phone" />
        </Label>

        <Label htmlFor="birthDay">
          Birth day
          <Input type="date" name="birthDate" id="birthDate" />
        </Label>

        <Label htmlFor="salary">
          Salary
          <Input type="number" name="salary" id="salary" />
        </Label>

        <Label htmlFor="contractType">
          Contract type
          <Select name="contractType" id="contractType">
            <option value="fullTime">Full time</option>
            <option value="partTime">Part time</option>
          </Select>
        </Label>

        <Label htmlFor="projectCategory">
          Project category
          <Select name="projectCategory" id="projectCategory">
            <option value="softwareDevelopment">Software development</option>
          </Select>
        </Label>

        <Label htmlFor="city">
          City
          <Select name="city" id="city">
            <option value="Bogota">Bogotá</option>
            <option value="villavicencio">Villavicencio</option>
          </Select>
        </Label>

        <Button type="submit">Register</Button>
      </Form>
    </FormContainer>
  );
};

export default CommonForm;
