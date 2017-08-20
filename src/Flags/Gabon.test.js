import React from 'react';
import renderer from 'react-test-renderer';

import Gabon from './Gabon';

it('renders correctly', () => {
  const tree = renderer.create(<Gabon />).toJSON();

  expect(tree).toMatchSnapshot();
});
