// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const green = '#0CB638';
const yellow = '#FCD20F';
const red = '#CF0821';

export default function Mali() {
  return (
    <LinearFlag
      gradient={`to right, ${gradient([green, yellow, red])}`}
    />
  );
}
