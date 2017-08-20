// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const red = '#CF0821';
const white = '#FFFFFF';

export default function Monaco() {
  return (
    <LinearFlag
      gradient={`${gradient([red, white])}`}
    />
  );
}
