// @flow
import React from 'react';

import FlagList from './FlagList';
import Armenia from './Flags/Armenia';
import Austria from './Flags/Austria';
import Belgium from './Flags/Belgium';
import Botswana from './Flags/Botswana';
import Bulgaria from './Flags/Bulgaria';

function App() {
  return (
    <FlagList>
      <Armenia />
      <Austria />
      <Belgium />
      <Botswana />
      <Bulgaria />
    </FlagList>
  );
}

export default App;
