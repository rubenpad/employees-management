import React from 'react';
import { mount } from 'enzyme';
import Login from '../../containers/Login';
import FormLogin from '../../components/FormLogin';

describe('Login container tests', () => {
  test('Should renders the FormLogin component', () => {
    const login = mount(<Login />);
    expect(login.find(FormLogin)).toHaveLength(1);
  });
});
