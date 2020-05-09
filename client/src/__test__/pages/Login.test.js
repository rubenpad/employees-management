import React from 'react';
import { mount } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Login from '../../pages/Login';
import LoginForm from '../../components/Forms/LoginForm';

describe('Login container tests', () => {
  test('Should renders the LoginForm component', () => {
    const login = mount(
      <ProviderMock>
        <Login />)
      </ProviderMock>
    );
    expect(login.find(LoginForm)).toHaveLength(1);
  });
});
