// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const black = '#000000';
const red = '#DE0000';
const yellow = '#FFCF00';

export default function Germany() {
  return (
    <LinearFlag
      gradient={`${gradient([black, red, yellow])}`}
    />
  );
}
