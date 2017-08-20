import React from 'react';
import renderer from 'react-test-renderer';

import Poland from './Poland';

it('renders correctly', () => {
  const tree = renderer.create(<Poland />).toJSON();

  expect(tree).toMatchSnapshot();
});
