// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const orange = '#F77F00';
const white = '#FFFFFF';
const green = '#009E60';

export default function IvoryCoast() {
  return (
    <LinearFlag
      gradient={`to right, ${gradient([orange, green, white])}`}
    />
  );
}
