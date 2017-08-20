// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const blue = '#002664';
const yellow = '#FECB00';
const red = '#C60C30';

export default function Chad() {
  return (
    <LinearFlag
      gradient={`to right, ${gradient([blue, yellow, red])}`}
    />
  );
}
