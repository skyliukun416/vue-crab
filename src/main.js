// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from 'axios';
import  API from './api/api.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';



Vue.use(VueSocketio, socketio('http://localhost:3009')); 
//Vue.use(VueSocketio, socketio('http://10.172.13.245:3009')); 
Vue.use(ElementUI);
Vue.config.productionTip = false

axios.interceptors.request.use(
  config => {
   config.headers = {
    'Content-Type': 'application/json',
    'authorization': localStorage.getItem('token')? localStorage.getItem('token'):'',
   };
   return config
  },
  error => {
   return Promise.reject(error)
  }
 )

 
 axios.interceptors.response.use(
  response => {
   
   return response
  },
  error => {
   return Promise.reject(error)
  }
 )


Vue.prototype.$http = axios;
Vue.prototype.$api = API;
Vue.prototype.$store= store;


/* eslint-disable no-new */
const v = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

//window.$vue = v;