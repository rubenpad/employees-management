import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Login from '../../pages/Login';
import LoginForm from '../../components/Forms/LoginForm';

describe('Login container tests', () => {
  test('Should renders the LoginForm component', () => {
    const login = mount(
      <MemoryRouter>
        <Login />)
      </MemoryRouter>
    );
    expect(login.find(LoginForm)).toHaveLength(1);
  });
});
