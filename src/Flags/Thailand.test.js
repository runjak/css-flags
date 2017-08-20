import React from 'react';
import renderer from 'react-test-renderer';

import Thailand from './Thailand';

it('renders correctly', () => {
  const tree = renderer.create(<Thailand />).toJSON();

  expect(tree).toMatchSnapshot();
});
