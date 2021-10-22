import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playlist:[],
    playButton:1,
    musicid:0,
  },
  mutations: {
    increment (state,songinformation) {
      state.playlist.push(songinformation)
    },
    changeplayButton(state,value){
      state.playButton=value
    },
    changeMusicId(state,id){
      state.musicid=id
    },
  },
  actions: {
  },
  modules: {
  }
})
