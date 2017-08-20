// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const blue = '#76ABDC';
const white = '#FFFFFF';
const black = '#000000';

export default function Belgium() {
  return (
    <LinearFlag
      gradient={`${gradient([blue, white, black, white, blue], [9, 1, 4, 1, 9])}`}
    />
  );
}
