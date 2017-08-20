import React from 'react';
import renderer from 'react-test-renderer';

import Guinea from './Guinea';

it('renders correctly', () => {
  const tree = renderer.create(<Guinea />).toJSON();

  expect(tree).toMatchSnapshot();
});
