import Vue from 'vue'
import Vuex from 'vuex'

import axios from "axios/index";

Vue.use(Vuex);
var store = new Vuex.Store({//store对象
  state: {
    demo_switch:true,
  
  },
  mutations: {

    stopSwitch(state, payload){
      console.log("stop switch" + payload)
      state.demo_switch = false
    },

    startSwitch(){
      this.demo_switch = true
    }
   
  },
  getters: {
    
    
    
  },
  actions: {
  }
})
export default store;
