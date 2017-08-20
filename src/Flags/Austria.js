// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const red = '#EE2537';
const white = '#FFFFFF';

export default function Armenia() {
  return (
    <LinearFlag
      gradient={gradient([red, white, red])}
    />
  );
}
