import { Episode } from 'rickmortyapi/dist/interfaces';

const getEpisodeName = async (episodeUrl: string) => {
  const response = await fetch(episodeUrl);

  const {name}: Episode = await response.json();

  return name;
} 

export default getEpisodeName;
