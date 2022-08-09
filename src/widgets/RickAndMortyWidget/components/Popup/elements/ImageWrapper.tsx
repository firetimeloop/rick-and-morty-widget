import styled from 'styled-components';

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  min-width: 220px;
  height: 100%;
  
  @media (max-width: 576px) {
    min-width: auto;
    justify-content: flex-start;
  }
`;

export default ImageWrapper;
