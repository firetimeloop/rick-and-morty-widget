import React, {useState, useEffect} from 'react';

import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { selectCurrentCharacter, setCurrentCharacterId } from '../../reducers/widgetSlice';
import getEpisodeName from '../../api/getEpisodeName';

import {
  Button,
  ButtonWrapper,
  Description,
  DescriptionWrapper,
  Image,
  ImageWrapper,
  Info,
  InfoLabel,
  Name,
  PopupWrapper,
  Status,
  StatusMark,
} from './elements'

const Popup = () => {
  const dispatch = useAppDispatch();
  const character = useAppSelector(selectCurrentCharacter);
  const [episodeName, setEpisodeName] = useState<string>('');

  const episodeUrl = (character?.episode || [])[0];

  useEffect(() => {
    const fetchData = async () => {
      const result = await getEpisodeName(episodeUrl);
      if (result) {
        setEpisodeName(result);
      }
    }

    if (episodeUrl) {
      setEpisodeName('');
      fetchData();
    }
  }, [character])

  if (!character) {
    return null;
  }

  const {name, image, status, species, location: {name: locationName}} = character;

  return (
    <PopupWrapper>
      <DescriptionWrapper>
        <ImageWrapper>
          <Image src={image}/>
        </ImageWrapper>
        <Description>
          <Name>{name}</Name>
          <Status>
            {status !== 'unknown' && (
              <>
                <StatusMark status={status}/>&nbsp;
              </>
            )}
            {`${status[0].toUpperCase()}${status.slice(1)}`} - {species}
          </Status>
          <InfoLabel>Last known location:</InfoLabel>
          <Info>{locationName}</Info>
          <InfoLabel>First seen in:</InfoLabel>
          {episodeName ? (
            <Info>{episodeName}</Info>
          ) : (
            "-"
          )}

        </Description>
        <ButtonWrapper
          role="navigation"
          onClick={() => dispatch(setCurrentCharacterId(null))}
        >
          <Button>
            &times;
          </Button>
        </ButtonWrapper>
      </DescriptionWrapper>
    </PopupWrapper>
  );
};

export default Popup;
