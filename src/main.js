// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
// import ElementUex from './assets/js/ElementUex.js'

import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'

Vue.use(VueResource)
Vue.use(ElementUI)
// Vue.prototype.$ElementUex = ElementUex


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
