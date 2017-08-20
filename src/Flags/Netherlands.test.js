import React from 'react';
import renderer from 'react-test-renderer';

import Netherlands from './Netherlands';

it('renders correctly', () => {
  const tree = renderer.create(<Netherlands />).toJSON();

  expect(tree).toMatchSnapshot();
});
