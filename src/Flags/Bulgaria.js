// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const white = '#FFFFFF';
const green = '#00976F';
const red = '#D72109';

export default function Bulgaria() {
  return (
    <LinearFlag
      gradient={`${gradient([white, green, red])}`}
    />
  );
}
