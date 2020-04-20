import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import FormLogin from '../../components/FormLogin';

describe('FormLogin tests', () => {
  let formLogin = null;

  beforeEach(() => {
    render(<FormLogin />);
  });

  test('Should renders FormLogin component', () => {
    formLogin = shallow(<FormLogin />);
    expect(formLogin.length).toBe(1);
  });

  test('Should has a username input and its associate label', () => {
    screen.getByLabelText('Username');
  });

  test('Should has a password input and its associate label', () => {
    screen.getByLabelText('Password');
  });

  test('Should has a button to perform the login action', () => {
    screen.getByText('Login');
  });
});
