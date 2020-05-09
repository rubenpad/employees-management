import React from 'react';
import { mount } from 'enzyme';
import ProjectCategoriesList from '../../components/ProjectCategoriesList';

const categoriesMock = [{ id: 1, name: 'Marketing' }];

describe('ProjectCategoriesList tests', () => {
  let projectCategoriesList;

  beforeEach(() => {
    projectCategoriesList = mount(
      <ProjectCategoriesList categories={categoriesMock} />
    );
  });

  test('Should renders the ProjectCategoriesList component', () => {
    expect(projectCategoriesList.length).toEqual(1);
  });

  test('Should renders the title: Project Categories', () => {
    expect(projectCategoriesList.find('h2').text()).toBe('Project Categories');
  });

  test('Should renders the categories list', () => {
    expect(projectCategoriesList.find('ul').children()).toHaveLength(
     categoriesMock.length
    );
  });
});
