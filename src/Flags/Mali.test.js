import React from 'react';
import renderer from 'react-test-renderer';

import Mali from './Mali';

it('renders correctly', () => {
  const tree = renderer.create(<Mali />).toJSON();

  expect(tree).toMatchSnapshot();
});
