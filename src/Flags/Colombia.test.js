import React from 'react';
import renderer from 'react-test-renderer';

import Colombia from './Colombia';

it('renders correctly', () => {
  const tree = renderer.create(<Colombia />).toJSON();

  expect(tree).toMatchSnapshot();
});
