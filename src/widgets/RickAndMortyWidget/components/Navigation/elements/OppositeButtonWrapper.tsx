import styled from 'styled-components';

import ButtonWrapper from './ButtonWrapper';

const OppositeButtonWrapper = styled(ButtonWrapper)`
  left: 0;
  border-radius: 0 50% 50% 0;

  & img {
    transform: rotate(180deg);
  }
`;

export default OppositeButtonWrapper;
