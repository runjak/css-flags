// @flow
import React from 'react';

// Level 1 flags:
import FlagList from './FlagList';
import Armenia from './Flags/Armenia';
import Austria from './Flags/Austria';
import Belgium from './Flags/Belgium';
import Botswana from './Flags/Botswana';
import Bulgaria from './Flags/Bulgaria';
import Chad from './Flags/Chad';
import Colombia from './Flags/Colombia';
import Congo from './Flags/Congo';
import CostaRica from './Flags/CostaRica';
import Estonia from './Flags/Estonia';
import France from './Flags/France';
import Gabon from './Flags/Gabon';
import Gambia from './Flags/Gambia';
import Germany from './Flags/Germany';
import Guinea from './Flags/Guinea';
import Hungary from './Flags/Hungary';
import Indonesia from './Flags/Indonesia';
import Ireland from './Flags/Ireland';
import Italy from './Flags/Italy';
import IvoryCoast from './Flags/IvoryCoast';
import Latvia from './Flags/Latvia';
import Lithuania from './Flags/Lithuania';
import Luxembourg from './Flags/Luxembourg';
import Mali from './Flags/Mali';
import Mauritius from './Flags/Mauritius';
import Monaco from './Flags/Monaco';
import Netherlands from './Flags/Netherlands';
import Nigeria from './Flags/Nigeria';
import Peru from './Flags/Peru';
import Poland from './Flags/Poland';
import Romania from './Flags/Romania';
import Russia from './Flags/Russia';
import SierraLeone from './Flags/SierraLeone';
import Tanzania from './Flags/Tanzania';
import Thailand from './Flags/Thailand';
import TrinidadAndTobago from './Flags/TrinidadAndTobago';
import Ukraine from './Flags/Ukraine';
import Yemen from './Flags/Yemen';

// Level 2 flags:
import Bahamas from './Flags/Bahamas';

function App() {
  return (
    <div>
      <h1>Level 1</h1>
      <FlagList>
        <Armenia />
        <Austria />
        <Belgium />
        <Botswana />
        <Bulgaria />
        <Chad />
        <Colombia />
        <Congo />
        <CostaRica />
        <Estonia />
        <France />
        <Gabon />
        <Gambia />
        <Germany />
        <Guinea />
        <Hungary />
        <Indonesia />
        <Ireland />
        <Italy />
        <IvoryCoast />
        <Latvia />
        <Lithuania />
        <Luxembourg />
        <Mali />
        <Mauritius />
        <Monaco />
        <Netherlands />
        <Nigeria />
        <Peru />
        <Poland />
        <Romania />
        <Russia />
        <SierraLeone />
        <Tanzania />
        <Thailand />
        <TrinidadAndTobago />
        <Ukraine />
        <Yemen />
      </FlagList>
      <h1>Level 2</h1>
      <FlagList>
        <Bahamas />
      </FlagList>
    </div>
  );
}

export default App;
