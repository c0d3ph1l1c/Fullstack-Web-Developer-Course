// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// vuex1
import Vuex from 'vuex';

// vuex2 - install into Vue
Vue.use(Vuex);

// vuex3 - Declare store object
const store = new Vuex.Store({
  // Prevent state to be modified directly
  strict: process.env.NODE_ENV != 'production',   
  state: {a: 12, b: 5},       // Core: Data
  mutations: {
    add(state, n) {
      state.a += n; 
    }
  },
  actions: {
    add({commit}, n) {
      commit('add', n);
    }
  },
  getters: {},
  modules: {}    
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
