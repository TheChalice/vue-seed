import Vue from 'vue'
import Router from 'vue-router'

import RouterConfigBase from "./router_config_base"

Vue.use(Router)


var routerConfig = [];
routerConfig = routerConfig.concat(RouterConfigBase)
console.log(routerConfig)
// debugger;
export default new Router ({
  linkActiveClass: 'active',
  routes:routerConfig
})
