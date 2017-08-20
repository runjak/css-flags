// @flow
import React, { Component } from 'react';
// $FlowFixMe - I broke flow modules -.-
import styled from 'styled-components';

type Props = {
  children?: any;
};

const FlagWrapper = styled.div`
  width: 300px;
  height: 200px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid black;
`;

const FlagListDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

class FlagList extends Component<Props> {
  get children(): Array<Element> {
    const { children = [] } = this.props;

    if (children instanceof Array) {
      return children;
    }

    return [children];
  }

  render() {
    return (
      <FlagListDiv>
        {this.children.map((child, index) => (
          <FlagWrapper key={`flag-wrapper-${index}`}>
            {child}
          </FlagWrapper>
        ))}
      </FlagListDiv>
    );
  }
}

export default FlagList;
