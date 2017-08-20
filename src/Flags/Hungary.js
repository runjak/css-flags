// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const red = '#CE263C';
const white = '#FFFFFF';
const green = '#41704C';

export default function Hungary() {
  return (
    <LinearFlag
      gradient={`${gradient([red, white, green])}`}
    />
  );
}
