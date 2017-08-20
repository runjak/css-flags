// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const green = '#18B638';
const yellow = '#FCD20F';
const black = '#000000';
const blue = '#00A4DE';

export default function Tanzania() {
  return (
    <LinearFlag
      gradient={`145deg, ${gradient([green, yellow, black, yellow, blue], [7, 1, 4, 1, 7])}`}
    />
  );
}
