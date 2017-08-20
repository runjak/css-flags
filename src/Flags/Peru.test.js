import React from 'react';
import renderer from 'react-test-renderer';

import Peru from './Peru';

it('renders correctly', () => {
  const tree = renderer.create(<Peru />).toJSON();

  expect(tree).toMatchSnapshot();
});
