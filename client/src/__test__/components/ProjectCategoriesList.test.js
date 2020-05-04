import React from 'react';
import { mount } from 'enzyme';
import ProjectCategoriesList from '../../components/ProjectCategoriesList';
import projectCategoriesMock from '../../__mocks__/projectCategoriesMock';

describe('ProjectCategoriesList tests', () => {
  let projectCategoriesList;

  beforeEach(() => {
    projectCategoriesList = mount(
      <ProjectCategoriesList categories={projectCategoriesMock} />
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
      projectCategoriesMock.length
    );
  });
});
