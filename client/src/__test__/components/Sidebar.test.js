import React from 'react';
import { mount } from 'enzyme';
import Sidebar from '../../components/Sidebar';
import ProjectCategoriesList from '../../components/ProjectCategoriesList';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('Sidebar component tests', () => {
  let sidebar;

  beforeEach(() => {
    sidebar = mount(
      <ProviderMock>
        <Sidebar />
      </ProviderMock>
    );
  });

  test('Should renders the component', () => {
    expect(sidebar.length).toBe(1);
  });

  test('Should renders the ProjectCategoriesList component', () => {
    expect(sidebar.find(ProjectCategoriesList)).toHaveLength(1);
  });
});
