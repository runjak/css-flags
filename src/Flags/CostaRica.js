// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const blue = '#002780';
const white = '#FFFFFF';
const red = '#CF0821';

export default function Congo() {
  return (
    <LinearFlag
      gradient={`${gradient([blue, white, red, white, blue], [1, 1, 2, 1, 1])}`}
    />
  );
}
