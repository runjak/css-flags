// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const green = '#009345';
const white = '#FFFFFF';
const red = '#CF2734';

export default function Italy() {
  return (
    <LinearFlag
      gradient={`to right, ${gradient([green, white, red])}`}
    />
  );
}
