// @flow
import React from 'react';

import LinearFlag from './LinearFlag';
import gradient from '../utils/gradient';

const red = '#EB2437';
const blue = '#131A6D';
const yellow = '#FFD600';
const green = '#00A650';

export default function Mauritius() {
  return (
    <LinearFlag
      gradient={`${gradient([red, blue, yellow, green])}`}
    />
  );
}
