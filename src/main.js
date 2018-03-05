// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import ElementUex from 'element-uex'
import $ from 'jquery'


 
// require styles
import 'element-ui/lib/theme-default/index.css'
import 'element-uex/lib/theme-default/index.css'

import App from './App'
import router from './router'

Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(ElementUex)


Vue.config.productionTip = false
Vue.http.interceptors.push((request, next) => {
  if(request.url==='/apis'){
    request.headers.set('sbsbs','sbsbsbs')
  }
  next(response => {
    return response
  })
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
