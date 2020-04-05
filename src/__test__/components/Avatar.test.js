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

  test('Should renders the user avatar image', () => {
    expect(avatar.find('div').childAt(0).type()).toEqual('img');
  });
});
