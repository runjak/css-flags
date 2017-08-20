// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const red = '#DA071E';
const white = '#FFFFFF';

export default function Peru() {
  return (
    <LinearFlag
      gradient={`to right, ${gradient([red, white, red])}`}
    />
  );
}
