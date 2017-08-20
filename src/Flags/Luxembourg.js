// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const red = '#EE2537';
const white = '#FFFFFF';
const blue = '#00A2DF';

export default function Luxembourg() {
  return (
    <LinearFlag
      gradient={`${gradient([red, white, blue])}`}
    />
  );
}
