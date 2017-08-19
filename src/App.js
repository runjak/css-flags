// @flow
import React from 'react';

import FlagList from './FlagList';
import Armenia from './Flags/Armenia';
import Austria from './Flags/Austria';

function App() {
  return (
    <FlagList>
      <Armenia />
      <Austria />
    </FlagList>
  );
}

export default App;
