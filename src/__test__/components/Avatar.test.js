import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../../components/Avatar';

describe('Avatar component tests', () => {
  let avatar;

  beforeEach(() => {
    avatar = shallow(<Avatar />);
  });

  test('Should renders the Avatar component', () => {
    expect(avatar.length).toBe(1);
  });
});
