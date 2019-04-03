import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    characters: [],
    voted: false,
    selected: undefined,
    coords: {
      lat: 0,
      lng: 0
    }
  },
  getters: {
    characters: state => state.characters,
    getCharacters(state){
      return characterss => {
        return state.characters === characterss
      }
    }
  },
  mutations: {
    SET_CHARACTERS (state, characters){
      state.characters = characters
    },
    // SET_LOCATION (state, x){
    //   state.coords.lat = x.coords.latitude
    //   state.coords.lng = x.coords.longitude
    // }
  },
  actions: {
    LoadCharacters({ commit }){
      axios.get('http://localhost:5000/characters')
        .then(data => {
          let characters = data.data.characters
          commit('SET_CHARACTERS', characters)
        })
        .catch(() => console.log('an error ocurred while setting the state with characters'))
    },
    MakeVote(state, index){
      let id = this.state.characters[index]._id
      let lat = this.state.coords.lat
      let lng = this.state.coords.lng

      axios.post('http://localhost:5000/voted', {lat: lat, lng:lng, character: id})
        .then(() => this.dispatch('LoadCharacters'))
    },

    // GetLocation(state){
    //   let x = undefined
    //   navigator.geolocation.getCurrentPosition((position)=>{
    //      x = position
    //     // commit('SET_LOCATION', x)
    //   }). then(
    //     state.coords.lat = x.coords.latitude,
    //     state.coords.lng = x.coords.longitude
    //   )
      

    // }
  }
})
