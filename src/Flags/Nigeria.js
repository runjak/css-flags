// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const green = '#008850';
const white = '#FFFFFF';

export default function Nigeria() {
  return (
    <LinearFlag
      gradient={`to right, ${gradient([green, white, green])}`}
    />
  );
}
