import React from 'react';
import renderer from 'react-test-renderer';

import Lithuania from './Lithuania';

it('renders correctly', () => {
  const tree = renderer.create(<Lithuania />).toJSON();

  expect(tree).toMatchSnapshot();
});
