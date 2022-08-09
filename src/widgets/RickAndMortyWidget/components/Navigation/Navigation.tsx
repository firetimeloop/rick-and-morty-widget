import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { incrementCurrentCharatersSlice, decrementCurrentCharatersSlice, selectCurrentCharatersSlice, selectCharactersLength } from '../../reducers/widgetSlice';

import {
  Button,
  ButtonWrapper,
  Image,
  OppositeButtonWrapper,  
} from './elements';
import arrow from './arrow.png';

import { Props } from './types';


const Navigation = ({slideCount}: Props) => {
  const dispatch = useAppDispatch();
  const currentCharatersSlice = useAppSelector(selectCurrentCharatersSlice);
  const charactersLength = useAppSelector(selectCharactersLength);

  return (
    <>
      {!(slideCount*(currentCharatersSlice + 1) >= charactersLength) && (
        <ButtonWrapper
          role="navigation"
          onClick={() => dispatch(incrementCurrentCharatersSlice())}
        >
          <Button>
            <Image src={arrow}/>
          </Button>
        </ButtonWrapper>
      )}

      {currentCharatersSlice !== 0 && (
        <OppositeButtonWrapper
          role="navigation"
          onClick={() => dispatch(decrementCurrentCharatersSlice())}
        >
          <Button>
            <Image src={arrow}/>
          </Button>
        </OppositeButtonWrapper> 
      )}
    </>
  );
};

export default Navigation;
