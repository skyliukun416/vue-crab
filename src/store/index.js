import Vue from 'vue'
import Vuex from 'vuex'

import axios from "axios/index";

Vue.use(Vuex);
var store = new Vuex.Store({//store对象
  state: {
    locations:[],
    loginToken: "",
    refreshLocation: false,
  },
  mutations: {
    changeLocationsMutation(state,newVal){
      state.locations = newVal;
    },

    refreshMutation(state,newVal){
      state.refreshLocation = newVal;
    },
   
  },
  getters: {
    getLocations:state=> state.locations,
    getRefreshLocation:state=> state.refreshLocation,
    
  },
  actions: {
  }
})
export default store;
