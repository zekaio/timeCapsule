import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// require styles
// import 'swiper/dist/css/swiper.css'
Vue.use(ElementUI)
// Vue.use(VueAwesomeSwiper /* { default global options } */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
