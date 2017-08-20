// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const red = '#FF0000';
const white = '#FFFFFF';

export default function Indonesia() {
  return (
    <LinearFlag
      gradient={`${gradient([red, white])}`}
    />
  );
}
