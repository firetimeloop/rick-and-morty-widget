import styled from 'styled-components';

const FiltersRow = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #262c3a;
  gap: 14px;
  flex-wrap: wrap;
  @media (max-width: 620px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export default FiltersRow;
