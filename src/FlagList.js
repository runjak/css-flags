// @flow
import React from 'react';
import { div as StyledDiv } from 'styled-components';

type Props = {
  children?: any;
};

const FlagWrapper = StyledDiv`
  border: 1px solid black;
  width: 300px;
  height: 200px;
`;

const FlagListDiv = StyledDiv`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default function FlagList(props: Props) {
  const { children } = props;

  if (!children) {
    return null;
  }

  // eslint-disable-line react/no-array-index-key
  return (
    <FlagListDiv>
      {children.map((child, index) => (
        <FlagWrapper key={`flag-wrapper-${index}`}>
          {child}
        </FlagWrapper>
      ))}
    </FlagListDiv>
  );
}
