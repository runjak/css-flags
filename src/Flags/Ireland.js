// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const green = '#0F9C62';
const white = '#FFFFFF';
const orange = '#FF893C';

export default function Ireland() {
  return (
    <LinearFlag
      gradient={`to right, ${gradient([green, white, orange])}`}
    />
  );
}
