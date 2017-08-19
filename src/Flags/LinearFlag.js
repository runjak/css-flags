// @flow
// $FlowFixMe - I broke flow modules -.-
import styled from 'styled-components';

type Props = {
  gradient: string,
};

const LinearFlag = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(${(props: Props) => (props.gradient)});
`;

export default LinearFlag;
