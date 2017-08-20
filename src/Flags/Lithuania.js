// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const yellow = '#FDBA0A';
const green = '#006A43';
const red = '#C22229';

export default function Lithuania() {
  return (
    <LinearFlag
      gradient={`${gradient([yellow, green, red])}`}
    />
  );
}
