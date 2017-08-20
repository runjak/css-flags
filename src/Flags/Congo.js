// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const green = '#009543';
const yellow = '#FBDE4A';
const red = '#DC241F';

export default function Congo() {
  return (
    <LinearFlag
      gradient={`-45deg, ${gradient([red, yellow, green], [2, 1, 2])}`}
    />
  );
}
