import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import router from '/router'
import { dollarFilter, percentFilter } from './filters'
import { Chart } from 'chart.js'
import Chartick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'

Vue.use(VueSpinners)
Vue.use(Chartick.use(Chart))

Vue.config.productionTip = false
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
