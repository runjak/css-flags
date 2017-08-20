import React from 'react';
import renderer from 'react-test-renderer';

import Ireland from './Ireland';

it('renders correctly', () => {
  const tree = renderer.create(<Ireland />).toJSON();

  expect(tree).toMatchSnapshot();
});
