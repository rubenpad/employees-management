import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import LoginForm from '../../components/Forms/LoginForm';

describe('LoginForm tests', () => {
  let loginForm = null;

  beforeEach(() => {
    loginForm = mount(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
  });

  test('Should renders LoginForm component', () => {
    expect(loginForm.length).toBe(1);
  });

  test('Should has a email input and its associate label', () => {
    expect(loginForm.find('form').childAt(0).text()).toBe('Email');
    expect(loginForm.find('form').childAt(0).find('input')).toHaveLength(1);
  });

  test('Should has a password input and its associate label', () => {
    expect(loginForm.find('form').childAt(1).text()).toBe('Password');
    expect(loginForm.find('form').childAt(1).find('input')).toHaveLength(1);
  });

  test('Should has a button to perform the login action', () => {
    expect(loginForm.find('button')).toHaveLength(1);
    expect(loginForm.find('button').text()).toBe('Login');
  });
});
