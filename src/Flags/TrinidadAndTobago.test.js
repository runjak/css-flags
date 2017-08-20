import React from 'react';
import renderer from 'react-test-renderer';

import TrinidadAndTobago from './TrinidadAndTobago';

it('renders correctly', () => {
  const tree = renderer.create(<TrinidadAndTobago />).toJSON();

  expect(tree).toMatchSnapshot();
});
