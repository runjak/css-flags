// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const green = '#18B638';
const white = '#FFFFFF';
const blue = '#0073C7';

export default function SierraLeone() {
  return (
    <LinearFlag
      gradient={`${gradient([green, white, blue])}`}
    />
  );
}
