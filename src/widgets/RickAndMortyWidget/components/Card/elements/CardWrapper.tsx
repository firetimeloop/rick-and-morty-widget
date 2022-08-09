import styled from 'styled-components';

import ImageWrapper from './ImageWrapper';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  align-items: center;
  width: 20%;
  border-radius: 6px;
  background-color: #f7f5ec;
  overflow: hidden;


  &:hover {
    cursor: pointer;
  }

  &:hover ${ImageWrapper}::before {
    height: 100%;
  }

  @media (max-width: 1024px) {
    width: 25%;
  }

  @media (max-width: 576px) {
    width: 50%;
  }
`;

export default CardWrapper;
