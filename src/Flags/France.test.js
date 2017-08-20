import React from 'react';
import renderer from 'react-test-renderer';

import France from './France';

it('renders correctly', () => {
  const tree = renderer.create(<France />).toJSON();

  expect(tree).toMatchSnapshot();
});
