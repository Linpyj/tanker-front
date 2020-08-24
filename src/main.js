import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import store from './store'

Vue.config.productionTip = false

library.add(fas, far)

Vue.use(Vuex);
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
  store,
  vuetify,
  router
}).$mount('#app')
