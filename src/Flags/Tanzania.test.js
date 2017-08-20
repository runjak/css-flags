import React from 'react';
import renderer from 'react-test-renderer';

import Tanzania from './Tanzania';

it('renders correctly', () => {
  const tree = renderer.create(<Tanzania />).toJSON();

  expect(tree).toMatchSnapshot();
});
