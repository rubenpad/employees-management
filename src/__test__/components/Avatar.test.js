import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../../components/Avatar';

describe('Avatar component tests', () => {
  test('Should renders the Avatar component', () => {
    const avatar = shallow(<Avatar />);
    expect(avatar.length).toBe(1);
  });
});
