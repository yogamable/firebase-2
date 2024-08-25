import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  getters: {
  },
  mutations: {
    //Al hacer login se guarda el usuario en el state
    AUTH_USER(state,user){
      state.user = user;
    },
    //Luego, al hacer logout se elimina el usuario del state
    CLEAR_USER(state){
      state.user = null;
    }
  },
  actions: {
  },
  modules: {
  }
})
