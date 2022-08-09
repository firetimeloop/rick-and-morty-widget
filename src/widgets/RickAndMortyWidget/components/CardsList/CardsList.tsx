import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../../app/hooks';
import Popup from '../Popup';
import { selectCharacters, selectCurrentCharatersSlice } from '../../reducers/widgetSlice';

import Card from '../Card';
import { Props } from './types';

const CardsList = ({slideCount}: Props) => {
  const characters = useAppSelector(selectCharacters);
  const currentCharatersSlice = useAppSelector(selectCurrentCharatersSlice);

  const charactersSlice = characters.slice(slideCount*currentCharatersSlice, slideCount*(currentCharatersSlice + 1));

  return (
    <CardsListWrapper>
      {charactersSlice.map((character) => (
        <Card key={character.id} name={character.name} image={character.image} id={character.id}/>
      ))}
      <Popup/>
    </CardsListWrapper>
  );
};

const CardsListWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  padding: 8px;
  gap: 8px;
  width: 100%;
  min-height: 200px;
  background-color: #262c3a;
`;

export default CardsList;
