import React from 'react';
import { shallow } from 'enzyme';

import App from '../../App';

describe('<App />', () => {
  test('should render the title in the App component', () => {
    const app = shallow(<App />);
    expect(app.length).toEqual(1);
  });
});
