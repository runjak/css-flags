// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const blue = '#002780';
const yellow = '#FCD20F';
const red = '#CF0821';

export default function Romania() {
  return (
    <LinearFlag
      gradient={`to right, ${gradient([blue, yellow, red])}`}
    />
  );
}
