import styled from 'styled-components';

import { CharacterStatus } from '../types';

const StatusMark = styled.span<CharacterStatus>`
  display: ${props => props.status === 'unknown' ? "none" : "inline-block"};
  background-color: ${props => props.status === 'Alive' ? "#5c4" : (props.status === 'Dead' ? "#d63d2e" : "none")};
  border-radius: 50%;
  width: 9px;
  height: 9px;
`;

export default StatusMark;
