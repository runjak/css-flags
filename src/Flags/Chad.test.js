import React from 'react';
import renderer from 'react-test-renderer';

import Chad from './Chad';

it('renders correctly', () => {
  const tree = renderer.create(<Chad />).toJSON();

  expect(tree).toMatchSnapshot();
});
