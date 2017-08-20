import React from 'react';
import renderer from 'react-test-renderer';

import IvoryCoast from './IvoryCoast';

it('renders correctly', () => {
  const tree = renderer.create(<IvoryCoast />).toJSON();

  expect(tree).toMatchSnapshot();
});
