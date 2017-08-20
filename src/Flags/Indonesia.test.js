import React from 'react';
import renderer from 'react-test-renderer';

import Indonesia from './Indonesia';

it('renders correctly', () => {
  const tree = renderer.create(<Indonesia />).toJSON();

  expect(tree).toMatchSnapshot();
});
