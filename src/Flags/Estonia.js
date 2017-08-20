// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const blue = '#0073CF';
const black = '#000000';
const white = '#FFFFFF';

export default function Estonia() {
  return (
    <LinearFlag
      gradient={`${gradient([blue, black, white])}`}
    />
  );
}
