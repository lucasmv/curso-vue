import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import Footer from './Footer'

Vue.config.productionTip = false

Vue.component('app-footer', Footer)

new Vue({
  render: h => h(App),
}).$mount('#app')
