import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import Navigation from './Navigation'
import Carousel from './Carousel'
import Toolbar from './Toolbar'
import Footer from './Footer'

Vue.config.productionTip = false

Vue.component('app-navigation', Navigation)
Vue.component('app-carousel', Carousel)
Vue.component('app-toolbar', Toolbar)
Vue.component('app-footer', Footer)

new Vue({
  render: h => h(App)
}).$mount('#app')
