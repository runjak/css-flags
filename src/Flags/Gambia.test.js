import React from 'react';
import renderer from 'react-test-renderer';

import Gambia from './Gambia';

it('renders correctly', () => {
  const tree = renderer.create(<Gambia />).toJSON();

  expect(tree).toMatchSnapshot();
});
