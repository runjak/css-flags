// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const blue = '#005BBC';
const yellow = '#FFD600';

export default function Ukraine() {
  return (
    <LinearFlag
      gradient={`${gradient([blue, yellow])}`}
    />
  );
}
