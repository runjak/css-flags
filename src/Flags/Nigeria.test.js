import React from 'react';
import renderer from 'react-test-renderer';

import Nigeria from './Nigeria';

it('renders correctly', () => {
  const tree = renderer.create(<Nigeria />).toJSON();

  expect(tree).toMatchSnapshot();
});
