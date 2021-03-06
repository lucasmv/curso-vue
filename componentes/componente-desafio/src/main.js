import Vue from 'vue'
import './plugins/vuetify'
import App from '@/main/App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
