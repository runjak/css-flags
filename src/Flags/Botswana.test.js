import React from 'react';
import renderer from 'react-test-renderer';

import Botswana from './Botswana';

it('renders correctly', () => {
  const tree = renderer.create(<Botswana />).toJSON();

  expect(tree).toMatchSnapshot();
});
