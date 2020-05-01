import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Header from '../../components/Header';
import Avatar from '../../components/Avatar';

describe('Header component tests', () => {
  let header;

  beforeEach(() => {
    header = mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  test('Should renders the Header component', () => {
    expect(header.length).toBe(1);
  });

  test('Should exists the Avatar component', () => {
    expect(header.find(Avatar)).toHaveLength(1);
  });
});