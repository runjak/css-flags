// @flow
import React from 'react';

import FlagList from './FlagList';
import Armenia from './Flags/Armenia';
import Austria from './Flags/Austria';
import Belgium from './Flags/Belgium';

function App() {
  return (
    <FlagList>
      <Armenia />
      <Austria />
      <Belgium />
    </FlagList>
  );
}

export default App;
