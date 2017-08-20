import React from 'react';
import renderer from 'react-test-renderer';

import Hungary from './Hungary';

it('renders correctly', () => {
  const tree = renderer.create(<Hungary />).toJSON();

  expect(tree).toMatchSnapshot();
});
