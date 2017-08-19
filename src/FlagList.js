import React from 'react';

import styled from 'styled-components';

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

export default function FlagList(props) {
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
