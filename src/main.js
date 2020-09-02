import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import store from './store'
import axios from 'axios'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

library.add(fas, far)

Vue.use(Vuex, VueAxios, axios);
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
  store,
  created() {
    this.$store.state.user.current = JSON.parse(sessionStorage.getItem('tanker')).user.current
    this.$store.state.user.token = JSON.parse(sessionStorage.getItem('tanker')).user.token
    this.$store.state.post.posts = JSON.parse(sessionStorage.getItem('tanker')).post.posts
    this.$store.state.post.content = JSON.parse(sessionStorage.getItem('tanker')).post.content
    axios.defaults.headers.common['Authorization']= 'Bearer ' + JSON.parse(sessionStorage.getItem('tanker')).user.token;
  },
  vuetify,
  router
}).$mount('#app')
