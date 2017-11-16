/**
 * Created by 七彩城 on 2017/11/16.
 */
import Vue from 'vue'
import moment from 'moment'

Vue.filter('data-string', (value, format) =>{
  return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
})
