import React from 'react';

import { useAppDispatch } from '../../../../app/hooks';
import { setCurrentCharacterId } from '../../reducers/widgetSlice';

import {
  CardWrapper,
  ImageWrapper,
  Image,
  Name,
} from './elements'

import { Props } from './types';

const Card = ({image, name, id}: Props) => {
  const dispatch = useAppDispatch();

  return (
    <CardWrapper onClick={() => {
      dispatch(setCurrentCharacterId(id))
    }}>
      <ImageWrapper>
        <Image src={image}/>
      </ImageWrapper>
      <Name>{name}</Name>
    </CardWrapper>
  );
};

export default Card;
