import React from 'react';
import renderer from 'react-test-renderer';

import Romania from './Romania';

it('renders correctly', () => {
  const tree = renderer.create(<Romania />).toJSON();

  expect(tree).toMatchSnapshot();
});
