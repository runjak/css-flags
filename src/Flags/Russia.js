// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const white = '#FFFFFF';
const blue = '#0037A7';
const red = '#D62718';

export default function Russia() {
  return (
    <LinearFlag
      gradient={`${gradient([white, blue, red])}`}
    />
  );
}
