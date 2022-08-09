import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  background: #000;
  top: 40%;
  height: 50px;
  width: 40px;
  padding: 8px;
  border-radius: 50% 0 0 50%;
  z-index: 2;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 0.9;
  }
`;

export default ButtonWrapper;
