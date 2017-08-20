// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const red = '#9F2D37';
const white = '#FFFFFF';

export default function Latvia() {
  return (
    <LinearFlag
      gradient={`${gradient([red, white, red], [2, 1, 2])}`}
    />
  );
}
