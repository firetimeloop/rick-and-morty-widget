import React, {useEffect} from 'react';
import styled from 'styled-components';
import getCharacters from './api/getCharacters';
import CardsList from './components/CardsList';
import Navigation from './components/Navigation';
import useSlideCount from './hooks/useSlideCount';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Filters from './components/Filters';
import { selectFilters, addCharacters, selectNextPageUrl, selectCurrentCharatersSlice, selectCharactersLength } from './reducers/widgetSlice';

const RickAndMorty = () => {
  const slideCount = useSlideCount();
  const dispatch = useAppDispatch();

  const nextPageUrl = useAppSelector(selectNextPageUrl);
  const currentCharatersSlice = useAppSelector(selectCurrentCharatersSlice);
  const charactersLength = useAppSelector(selectCharactersLength);
  const filters = useAppSelector(selectFilters);

  const isMoutedRef = React.useRef(false);

  const fetchData = async () => {
    const results = await getCharacters(nextPageUrl);
    if (results) {
      dispatch(addCharacters(results));
    }
  }

  const getData = () => {
    fetchData()
      .catch(console.error);
  }

  // useOnceCallOnMount(getData);

  useEffect(() => {
    if (nextPageUrl && (slideCount*(currentCharatersSlice + 1) >= charactersLength)) {
      getData()
    }
  }, [currentCharatersSlice])

  useEffect(() => {
    if (isMoutedRef.current) {
      getData()
      return;
    }

    isMoutedRef.current = true;
  }, [filters])


  return (
    <>
      <Wrapper>
        <Title>Choose Rick and Morty's characters</Title>
        <Filters/>
        <CardsListWithNavigation>
          <CardsList slideCount={slideCount}/>
          <Navigation slideCount={slideCount}/>
        </CardsListWithNavigation>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.17);
  border-radius: 6px;
`;

const CardsListWithNavigation = styled.div`
  position: relative;
`;


const Title = styled.h2`
  text-align: center;
`;

export default RickAndMorty;
