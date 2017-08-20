import React from 'react';
import renderer from 'react-test-renderer';

import Ukraine from './Ukraine';

it('renders correctly', () => {
  const tree = renderer.create(<Ukraine />).toJSON();

  expect(tree).toMatchSnapshot();
});
