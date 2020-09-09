import Vue from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import router from './router'
import store from './store'
import FastClick from 'fastclick'

import toast  from '../src/components/common/toast/index'
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(toast)
//解决300s 点击延迟
FastClick.attach(document.body)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
