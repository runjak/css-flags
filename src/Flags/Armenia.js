// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const red = '#DA0009';
const blue = '#0030A1';
const yellow = '#F3A900';

export default function Armenia() {
  return (
    <LinearFlag
      gradient={gradient([red, blue, yellow])}
    />
  );
}
