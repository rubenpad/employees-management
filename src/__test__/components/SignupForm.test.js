import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SignupFrom from '../../components/Forms/SignupForm';

describe('SignupForm tests', () => {
  let signupForm = null;

  beforeEach(() => {
    signupForm = mount(
      <MemoryRouter>
        <SignupFrom />
      </MemoryRouter>
    );
  });

  test('Should renders the SignupForm component', () => {
    expect(signupForm.length).toBe(1);
  });

  test('Should has a name input and its associate label', () => {
    expect(signupForm.find('form').childAt(0).text()).toBe('Company Name');
    expect(signupForm.find('form').childAt(0).find('input')).toHaveLength(1);
  });

  test('Should has a email input and its associate label', () => {
    expect(signupForm.find('form').childAt(1).text()).toBe('Email');
    expect(signupForm.find('form').childAt(1).find('input')).toHaveLength(1);
  });

  test('Should has a password input and its associate label', () => {
    expect(signupForm.find('form').childAt(2).text()).toBe('Password');
    expect(signupForm.find('form').childAt(2).find('input')).toHaveLength(1);
  });

  test('Should has a button to perform the Signup action', () => {
    expect(signupForm.find('button')).toHaveLength(1);
    expect(signupForm.find('button').text()).toBe('Create account');
  });
});
