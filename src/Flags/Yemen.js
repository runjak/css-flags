// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const red = '#CF0821';
const white = '#FFFFFF';
const black = '#000000';

export default function Yemen() {
  return (
    <LinearFlag
      gradient={`${gradient([red, white, black])}`}
    />
  );
}
