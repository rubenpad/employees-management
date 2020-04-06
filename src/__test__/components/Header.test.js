import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import Avatar from '../../components/Avatar';

describe('Header component tests', () => {
  let header;

  beforeEach(() => {
    header = shallow(<Header />);
  });

  test('Should renders the Header component', () => {
    expect(header.length).toBe(1);
  });

  test('Should renders the company logo image', () => {
    expect(header.find('div').childAt(0).type()).toEqual('img');
  });

  test('Should exists the Avatar component', () => {
    expect(header.find(Avatar)).toHaveLength(1);
  });
});
