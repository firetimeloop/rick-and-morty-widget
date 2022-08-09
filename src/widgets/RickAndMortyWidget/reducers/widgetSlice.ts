import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from 'rickmortyapi/dist/interfaces';
import { RootState } from '../../../app/store';

export interface WidgetState {
  currentCharacterId: number | null;
  characters: Character[];
  currentCharatersSlice: number;
  nextPageUrl: string | undefined;
  filters: {
    [key: string]: string | undefined;
  }
}

const initialState: WidgetState = {
  currentCharacterId: null,
  characters: [],
  currentCharatersSlice: 0,
  nextPageUrl: undefined,
  filters: {},
};

export const widgetSlice = createSlice({
  name: 'rickAndMortyWidget',
  initialState,
  reducers: {
    setCurrentCharacterId: (state, action: PayloadAction<number | null>) => {
      state.currentCharacterId = action.payload;
    },
    addCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = [...state.characters, ...action.payload];
    },
    incrementCurrentCharatersSlice: (state) => {
      state.currentCharatersSlice += 1;
    },
    decrementCurrentCharatersSlice: (state) => {
      state.currentCharatersSlice -= 1;
    },
    setNextPageUrl: (state, action: PayloadAction<string | undefined>) => {
      state.nextPageUrl = action.payload;
    },
    addFilter: (state, action: PayloadAction<{name: string; value?: string}>) => {
      state.filters = {...state.filters, [action.payload.name]: action.payload.value};
      state.nextPageUrl = undefined;
      state.currentCharatersSlice = 0;
      state.characters = [];
    },
  },
});

export const { addFilter, setCurrentCharacterId, addCharacters, decrementCurrentCharatersSlice, incrementCurrentCharatersSlice, setNextPageUrl } = widgetSlice.actions;

export const selectCurrentCharacter = (state: RootState) => state.rickAndMortyWidget.characters.find(
  character => character.id === state.rickAndMortyWidget.currentCharacterId
);

export const selectFilters = (state: RootState) => state.rickAndMortyWidget.filters;

export const selectNextPageUrl = (state: RootState) => state.rickAndMortyWidget.nextPageUrl;

export const selectCharacters = (state: RootState) => state.rickAndMortyWidget.characters || [];

export const selectCharactersLength = (state: RootState) => state.rickAndMortyWidget.characters.length;

export const selectCurrentCharatersSlice = (state: RootState) => state.rickAndMortyWidget.currentCharatersSlice;

export default widgetSlice.reducer;
