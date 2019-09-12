// @flow
import React from 'react';
// $FlowFixMe - I broke flow modules -.-
import styled from 'styled-components';
import gradient from '../utils/gradient';

const blue = '#00788C';
const yellow = '#FFC828';

const TriangleFlag = styled.div`
  width: 300px;
  height: 0;
  border-image: linear-gradient(${(props: Props) => (props.gradient)});
  border-width: 100px;
  border-left-color: black;
`;

export default function Bahamas() {
  return (
    <TriangleFlag
      gradient={gradient([blue, yellow, blue])}
    />
  );
}
