import React from 'react';
import renderer from 'react-test-renderer';

import Yemen from './Yemen';

it('renders correctly', () => {
  const tree = renderer.create(<Yemen />).toJSON();

  expect(tree).toMatchSnapshot();
});
