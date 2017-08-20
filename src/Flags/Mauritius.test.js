import React from 'react';
import renderer from 'react-test-renderer';

import Mauritius from './Mauritius';

it('renders correctly', () => {
  const tree = renderer.create(<Mauritius />).toJSON();

  expect(tree).toMatchSnapshot();
});
