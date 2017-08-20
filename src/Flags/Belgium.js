// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const black = '#000000';
const yellow = '#FAE140';
const red = '#EE2537';

export default function Belgium() {
  return (
    <LinearFlag
      gradient={`to right, ${gradient([black, yellow, red])}`}
    />
  );
}
