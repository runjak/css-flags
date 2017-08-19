// @flow
import React from 'react';
import LinearFlag from './LinearFlag';

const red = '#DA0009';
const blue = '#0030A1';
const yellow = '#F3A900';

const gradient = `${red} 0%, ${red} 33%, ${blue} 33%, ${blue} 66%, ${yellow} 66%, ${yellow} 100%`;

export default function Armenia() {
  return (
    <LinearFlag
      gradient={gradient}
    />
  );
}
