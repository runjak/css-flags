import React from 'react';
import renderer from 'react-test-renderer';

import Estonia from './Estonia';

it('renders correctly', () => {
  const tree = renderer.create(<Estonia />).toJSON();

  expect(tree).toMatchSnapshot();
});
