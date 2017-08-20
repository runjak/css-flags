import React from 'react';
import renderer from 'react-test-renderer';

import Austria from './Austria';

it('renders correctly', () => {
  const tree = renderer.create(<Austria />).toJSON();

  expect(tree).toMatchSnapshot();
});
