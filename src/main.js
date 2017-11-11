
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/reset.css'
import './common/stylus/fonts.styl'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
