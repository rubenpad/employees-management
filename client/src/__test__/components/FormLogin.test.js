import React from 'react';
import { mount } from 'enzyme';
import FormLogin from '../../components/FormLogin';

describe('FormLogin tests', () => {
  let formLogin = null;

  beforeEach(() => {
    formLogin = mount(<FormLogin />);
  });

  test('Should renders FormLogin component', () => {
    expect(formLogin.length).toBe(1);
  });

  test('Should has a username input and its associate label', () => {
    expect(formLogin.find('form').childAt(0).text()).toBe('Email');
    expect(formLogin.find('form').childAt(0).find('input')).toHaveLength(1);
  });

  test('Should has a password input and its associate label', () => {
    expect(formLogin.find('form').childAt(1).text()).toBe('Password');
    expect(formLogin.find('form').childAt(1).find('input')).toHaveLength(1);
  });

  test('Should has a button to perform the login action', () => {
    expect(formLogin.find('button')).toHaveLength(1);
    expect(formLogin.find('button').text()).toBe('Login');
  });
});
