import { Character, Info } from 'rickmortyapi/dist/interfaces';

import constructQueryFromFielters from '../utils/constructQueryFromFielters';
import { store } from '../../../app/store';
import { setNextPageUrl } from '../reducers/widgetSlice';

const BASE_URL = 'https://rickandmortyapi.com/api/character'

const getCharacters = async (url = BASE_URL) => {
  const {rickAndMortyWidget: {filters}} = store.getState();

  const queries = constructQueryFromFielters(filters);
  const urlWithQuery = url.endsWith('/api/character') ? `${url}${queries.slice(1) ? `?${queries.slice(1)}` : ''}` : `${url}${queries}`;

  const response = await fetch(urlWithQuery);

  const {results, info}: Info<Character[]> = await response.json();

  if (info) {
    store.dispatch(setNextPageUrl(info.next || undefined));
  }

  return results;
} 

export default getCharacters;
