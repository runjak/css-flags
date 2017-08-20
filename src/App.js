// @flow
import React from 'react';

import FlagList from './FlagList';
import Armenia from './Flags/Armenia';
import Austria from './Flags/Austria';
import Belgium from './Flags/Belgium';
import Botswana from './Flags/Botswana';
import Bulgaria from './Flags/Bulgaria';
import Chad from './Flags/Chad';
import Colombia from './Flags/Colombia';
import Congo from './Flags/Congo';

function App() {
  return (
    <FlagList>
      <Armenia />
      <Austria />
      <Belgium />
      <Botswana />
      <Bulgaria />
      <Chad />
      <Colombia />
      <Congo />
    </FlagList>
  );
}

export default App;
