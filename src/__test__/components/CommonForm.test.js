import React from 'react';
import { mount } from 'enzyme';
import CommonForm from '../../components/CommonForm';

describe('Form tests', () => {
  let form = null;

  beforeEach(() => {
    form = mount(<CommonForm />);
  });

  test('Form component should be rendered', () => {
    expect(form).toHaveLength(1);
  });

  test('Form should has the corresponding numbers of labels to data required', () => {
    expect(form.find('label')).toHaveLength(9);
  });

  test('Form contract type, city and category information should be in a select tag', () => {
    expect(form.find('select')).toHaveLength(3);
  });

  test('Form should has a button to perform the register action', () => {
    expect(form.find('button').text()).toBe('Register');
  });
});
