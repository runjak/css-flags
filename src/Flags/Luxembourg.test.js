import React from 'react';
import renderer from 'react-test-renderer';

import Luxembourg from './Luxembourg';

it('renders correctly', () => {
  const tree = renderer.create(<Luxembourg />).toJSON();

  expect(tree).toMatchSnapshot();
});
