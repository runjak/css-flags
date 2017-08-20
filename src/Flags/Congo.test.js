import React from 'react';
import renderer from 'react-test-renderer';

import Congo from './Congo';

it('renders correctly', () => {
  const tree = renderer.create(<Congo />).toJSON();

  expect(tree).toMatchSnapshot();
});
