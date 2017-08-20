import React from 'react';
import renderer from 'react-test-renderer';

import Belgium from './Belgium';

it('renders correctly', () => {
  const tree = renderer.create(<Belgium />).toJSON();

  expect(tree).toMatchSnapshot();
});
