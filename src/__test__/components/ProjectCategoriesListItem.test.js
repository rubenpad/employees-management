import React from 'react';
import { mount } from 'enzyme';
import ProjectCategoriesListItem from '../../components/ProjectCategoriesListItem';

describe('ProjectCategoriesListItem tests', () => {
  test('Should renders the ProjectCategoriesListItem component', () => {
    const projectCategoriesListItem = mount(<ProjectCategoriesListItem />);
    expect(projectCategoriesListItem.length).toBe(1);
  });
});
