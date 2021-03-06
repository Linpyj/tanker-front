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
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import VueMq from 'vue-mq'
import firebase from 'firebase/app'

Vue.config.productionTip = false

library.add(fas, far)

Vue.use(Vuex, VueAxios, axios);
Vue.use(VueMq, {
  breakpoints: {
    sp: 959,
    pc: 500
  },
  defaultBreakpoint: 'sp'
});
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('v-select', vSelect)

var firebaseConfig = {
  apiKey: "AIzaSyBJ_twiZtgzIucCmMSsV_lpVuCx1BDSwpU",
  authDomain: "tanker-9adc7.firebaseapp.com",
  databaseURL: "https://tanker-9adc7.firebaseio.com",
  projectId: "tanker-9adc7",
  storageBucket: "tanker-9adc7.appspot.com",
  messagingSenderId: "324522100548",
  appId: "1:324522100548:web:5e4adb01fad039073a3911",
  measurementId: "G-LK3LTW2M2Z"
};

firebase.initializeApp(firebaseConfig);

// axios.defaults.headers.common['SameSite'] = 'none';
// axios.defaults.headers.common['Secure'] = true;

// axios({
//   headers: {
//     SameSite: none;
//     Secure;
//   }
// })

new Vue({
  render: h => h(App),
  store,
  created() {
    // この記述の要不要は要確認
    this.$store.state.user.current = JSON.parse(sessionStorage.getItem('tanker')).user.current
    this.$store.state.user.token = JSON.parse(sessionStorage.getItem('tanker')).user.token
    this.$store.state.post.posts = JSON.parse(sessionStorage.getItem('tanker')).post.posts
    this.$store.state.post.content = JSON.parse(sessionStorage.getItem('tanker')).post.content
    axios.defaults.headers.common['Authorization']= 'Bearer ' + JSON.parse(sessionStorage.getItem('tanker')).user.token;
  },
  vuetify,
  router
}).$mount('#app')
