import axios from 'axios';
import {public_key} from '../../marvel_key.js';


export const fetchCharacters = async () => {
  return await axios.get(`https://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)
}