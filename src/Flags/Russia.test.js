import React from 'react';
import renderer from 'react-test-renderer';

import Russia from './Russia';

it('renders correctly', () => {
  const tree = renderer.create(<Russia />).toJSON();

  expect(tree).toMatchSnapshot();
});
