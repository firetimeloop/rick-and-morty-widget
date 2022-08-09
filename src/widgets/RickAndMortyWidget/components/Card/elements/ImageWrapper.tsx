import styled from 'styled-components';

const ImageWrapper = styled.div`
  position: relative;

  &:before {
    content: "";
    width: 100%;
    height: 0;
    border-radius: 50%;
    background-color: #1369ce;
    position: absolute;
    bottom: 150%;
    right: 0;
    left: 0;
    opacity: 0.9;
    transform: scale(3);
    transition: all 0.3s linear 0s;
  }
`;

export default ImageWrapper;
