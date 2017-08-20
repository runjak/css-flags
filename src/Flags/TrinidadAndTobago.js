// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const red = '#DB1332';
const white = '#FFFFFF';
const black = '#000000';

export default function TrinidadAndTobago() {
  return (
    <LinearFlag
      gradient={`45deg, ${gradient([red, white, black, white, red], [10, 1, 3, 1, 10])}`}
    />
  );
}
