import React from 'react';
import { shallow } from 'enzyme';
import ProjectCategoriesListItem from '../../components/ProjectCategoriesListItem';

describe('ProjectCategoriesListItem tests', () => {
  let projectCategoriesListItem;

  beforeEach(() => {
    projectCategoriesListItem = shallow(<ProjectCategoriesListItem />);
  });

  test('Should renders the ProjectCategoriesList component', () => {
    expect(projectCategoriesListItem.length).toBe(1);
  });

  test('Should renders the category title', () => {
    expect(projectCategoriesListItem.find('li').childAt(0).type()).toBe('h2');
  });
});
