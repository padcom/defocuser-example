import Vue from 'vue'
import App from './App.vue'
import Defocuser from 'defocuser-vue'

Vue.config.productionTip = false
Vue.use(Defocuser)

new Vue({
  render: h => h(App)
}).$mount('#app')
