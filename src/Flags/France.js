// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const blue = '#001E96';
const white = '#FFFFFF';
const red = '#EE2537';

export default function France() {
  return (
    <LinearFlag
      gradient={`to right, ${gradient([blue, white, red])}`}
    />
  );
}
