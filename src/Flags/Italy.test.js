import React from 'react';
import renderer from 'react-test-renderer';

import Italy from './Italy';

it('renders correctly', () => {
  const tree = renderer.create(<Italy />).toJSON();

  expect(tree).toMatchSnapshot();
});
