// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const red = '#AF1524';
const white = '#FFFFFF';
const blue = '#1B458C';

export default function Netherlands() {
  return (
    <LinearFlag
      gradient={`${gradient([red, white, blue])}`}
    />
  );
}
