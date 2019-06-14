import Vue from 'vue'
import Vuex from 'vuex'

import axios from "axios/index";

Vue.use(Vuex);
var store = new Vuex.Store({//store对象
  state: {
    qmeOrders:[]
  
  },
  mutations: {


   pushOrder(state, payload){
    this.state.qmeOrders.push(payload)
   }
   
  },
  getters: {
    getQMEorders:state=> state.qmeOrders,
    
    
  },
  actions: {
  }
})
export default store;
