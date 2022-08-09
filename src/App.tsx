import React from 'react';
import styled from 'styled-components';
import RickAndMortyWidget from './widgets/RickAndMortyWidget';


function App() {
  return (
    <AppWrapper>
      <RickAndMortyWidget/>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
