// @flow
import React from 'react';
// $FlowFixMe - I broke flow modules -.-
import styled from 'styled-components';

const red = '#DA0009';
const blue = '#0030A1';
const yellow = '#F3A900';

const Flag = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(${red} 0%, ${red} 33%, ${blue} 33%, ${blue} 66%, ${yellow} 66%, ${yellow} 100%);
`;

export default function Armenia() {
  return (<Flag />);
}
