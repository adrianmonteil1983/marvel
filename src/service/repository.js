import axios from 'axios';
import {public_key} from '../../marvel_key.js';


export const fetchCharacters = async () => {
  return await axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)
}