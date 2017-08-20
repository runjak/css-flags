// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const red = '#EE151F';
const white = '#FFFFFF';
const blue = '#1F174E';

export default function Thailand() {
  return (
    <LinearFlag
      gradient={`${gradient([red, white, blue, white, red], [1, 1, 2, 1, 1])}`}
    />
  );
}
