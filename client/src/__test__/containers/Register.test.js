import React from 'react';
import { mount } from 'enzyme';
import Register from '../../containers/Register';
import CommonForm from '../../components/CommonForm';

describe('Register container tests', () => {
  test('Register should renders the CommonForm component', () => {
    const register = mount(<Register />);
    expect(register.find(CommonForm)).toHaveLength(1);
  });
});
