import React from 'react';
import renderer from 'react-test-renderer';

import Germany from './Germany';

it('renders correctly', () => {
  const tree = renderer.create(<Germany />).toJSON();

  expect(tree).toMatchSnapshot();
});
