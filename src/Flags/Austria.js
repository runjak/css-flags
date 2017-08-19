// @flow
import React from 'react';
import LinearFlag from './LinearFlag';

const red = '#EE2537';
const white = '#FFFFFF';

const gradient = `${red} 0%, ${red} 33%, ${white} 33%, ${white} 66%, ${red} 66%, ${red} 100%`;

export default function Armenia() {
  return (
    <LinearFlag
      gradient={gradient}
    />
  );
}
