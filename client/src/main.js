import Vue from 'vue'
import App from './App.vue'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
import d3 from 'd3'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueAxios, axios, d3, BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
