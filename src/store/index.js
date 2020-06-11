import Vue from 'vue'
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import { fetchCharacters } from '../service/repository.js';
import { GET_HEROS } from '../constants/constants.js';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    characters: {},
    toto: 'toto',
    tutu: 'tutu',
    id:''
  },
  mutations: {
    [GET_HEROS](state, data){
      console.log(data)
        state.characters = data;
    },
    setID(state,id){
      state.id = id
    }
  },
  getters:{
    filteredHeros:(state) => {
      return state.characters.data
      ? state.characters.data.data.results
      : null
    },
    getHero: (state,getters) => (index) => {
      console.log(index)
      return getters.filteredHeros
      ? getters.filteredHeros[index]
      : null
    }
  },
  actions: {
    async getData({commit}){
      console.log('getData')
      commit('GET_HEROS', await fetchCharacters())
    }
  },
  modules: {
  },
})
