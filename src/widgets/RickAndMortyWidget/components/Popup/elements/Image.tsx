import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  border-radius: 8px 0 0 8px;

  @media (max-width: 576px) {
    margin-top: 28px;
    border-radius: 50%;
  }
`

export default Image;
