
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueScroller from 'vue-scroller'

import './mock/mockServer'
import './filters'
import '../static/reset.css'
import './common/stylus/fonts.styl'

Vue.use(VueScroller)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
