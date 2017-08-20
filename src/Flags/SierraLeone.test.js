import React from 'react';
import renderer from 'react-test-renderer';

import SierraLeone from './SierraLeone';

it('renders correctly', () => {
  const tree = renderer.create(<SierraLeone />).toJSON();

  expect(tree).toMatchSnapshot();
});
