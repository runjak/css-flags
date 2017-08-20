import React from 'react';
import renderer from 'react-test-renderer';

import Latvia from './Latvia';

it('renders correctly', () => {
  const tree = renderer.create(<Latvia />).toJSON();

  expect(tree).toMatchSnapshot();
});
