import React from 'react';
import renderer from 'react-test-renderer';

import Bulgaria from './Bulgaria';

it('renders correctly', () => {
  const tree = renderer.create(<Bulgaria />).toJSON();

  expect(tree).toMatchSnapshot();
});
