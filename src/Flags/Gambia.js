// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const red = '#CF0821';
const white = '#FFFFFF';
const blue = '#04158D';
const green = '#387824';

export default function Gambia() {
  return (
    <LinearFlag
      gradient={`${gradient([red, white, blue, white, green], [5, 1, 3, 1, 5])}`}
    />
  );
}
