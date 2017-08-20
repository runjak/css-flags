// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const green = '#009F60';
const yellow = '#FCD20F';
const blue = '#3876C5';

export default function Gabon() {
  return (
    <LinearFlag
      gradient={`${gradient([green, yellow, blue])}`}
    />
  );
}
