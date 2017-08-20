// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const yellow = '#FCD20F';
const blue = '#003694';
const red = '#CF0821';

export default function Colombia() {
  return (
    <LinearFlag
      gradient={`${gradient([yellow, blue, red], [2, 1, 1])}`}
    />
  );
}
