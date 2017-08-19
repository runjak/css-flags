// @flow
import React from 'react';
// $FlowFixMe - I broke flow modules -.-
import styled from 'styled-components';

type Props = {
  children?: any;
};

const FlagWrapper = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 200px;
`;

const FlagListDiv = styled.div`
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
