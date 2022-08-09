import styled from 'styled-components';

const PopupWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: rgba(0,0,0,0.8);
  padding: 0 4px;

  @media (max-width: 576px) {
    padding: 0;
  }
`;

export default PopupWrapper;
