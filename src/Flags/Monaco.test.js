import React from 'react';
import renderer from 'react-test-renderer';

import Monaco from './Monaco';

it('renders correctly', () => {
  const tree = renderer.create(<Monaco />).toJSON();

  expect(tree).toMatchSnapshot();
});
