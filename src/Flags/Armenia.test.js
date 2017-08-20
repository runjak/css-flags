import React from 'react';
import renderer from 'react-test-renderer';

import Armenia from './Armenia';

it('renders correctly', () => {
  const tree = renderer.create(<Armenia />).toJSON();

  expect(tree).toMatchSnapshot();
});
