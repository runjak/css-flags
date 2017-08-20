import React from 'react';
import renderer from 'react-test-renderer';

import CostaRica from './CostaRica';

it('renders correctly', () => {
  const tree = renderer.create(<CostaRica />).toJSON();

  expect(tree).toMatchSnapshot();
});
