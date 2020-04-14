import React from 'react';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import ProjectCategoriesListItem from '../../components/ProjectCategoriesListItem';

describe('ProjectCategoriesListItem tests', () => {
  let projectCategoriesListItem;

  beforeEach(() => {
    projectCategoriesListItem = shallow(<ProjectCategoriesListItem />);
  });

  test('Should renders the ProjectCategoriesListItem component', () => {
    expect(projectCategoriesListItem.length).toBe(1);
  });

  test('Should renders the category title in a `li` element', () => {
    render(<ProjectCategoriesListItem />);
    screen.queryByRole('li');
  });
});
