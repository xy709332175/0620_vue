// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import store from './vuex/store'

Vue.config.productionTip = false
// 声明使用插件
Vue.use(VueResource)

// 创建一个全局事件总线对象,并保存在Vue的原型对象上(让所有的组件对象都能看见)
// Vue.prototype.$globalEventBus = new Vue()
// Vue.prototype.$bus = new Vue()
Vue.prototype.$eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>',
  store
}).$mount('#app')
