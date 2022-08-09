import styled from 'styled-components';

const DescriptionWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  align-items: stretch;
  background-color: #3c3e44;
  height: 100%;
  border-radius: 8px;

  @media (max-width: 576px) {
    border-radius: 0;
    align-items: center;
  }
`;

export default DescriptionWrapper;
