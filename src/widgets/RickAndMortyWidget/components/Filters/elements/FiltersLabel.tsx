import styled from 'styled-components';

const FiltersLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #f5f5f5;
  font-size: 16px;
  min-width: 240px;

  @media (max-width: 620px) {
    justify-content: flex-end;
  }

  & input {
    font-size: 16px;
    min-height: 38px;
    border-radius: 4px;
  }
`;

export default FiltersLabel;
