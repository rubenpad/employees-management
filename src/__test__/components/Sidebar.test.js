import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../../components/Sidebar';
import ProjectCategoriesList from '../../components/ProjectCategoriesList';

describe('Sidebar component tests', () => {
  let sidebar;

  beforeEach(() => {
    sidebar = shallow(<Sidebar />);
  });

  test('Should renders the component', () => {
    expect(sidebar.length).toBe(1);
  });

  test('Should renders the ProjectCategoriesList component', () => {
    expect(sidebar.find(ProjectCategoriesList)).toHaveLength(1);
  });
});
