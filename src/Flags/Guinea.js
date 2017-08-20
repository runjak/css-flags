// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const red = '#CF0821';
const yellow = '#FCD20F';
const green = '#009560';

export default function Guinea() {
  return (
    <LinearFlag
      gradient={`to right, ${gradient([red, yellow, green])}`}
    />
  );
}
