import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$qName = 'mathsquestions'
Vue.prototype.$path = './data/mathsquestions.js'


new Vue({
  render: h => h(App),
}).$mount('#app')
