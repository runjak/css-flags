// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const white = '#E9E8E7';
const red = '#D4213D';

export default function Poland() {
  return (
    <LinearFlag
      gradient={`${gradient([white, red])}`}
    />
  );
}
