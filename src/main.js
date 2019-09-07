// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/styles.css'
import Default from './layouts/Default.vue'
import Minima from './layouts/Minima.vue'
import store from './store'
Vue.component('default-layout', Default)
Vue.component('minima-layout', Minima)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
