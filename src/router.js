import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Timeline from '@/views/Timeline.vue'
import MyPage from '@/views/MyPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { 
      path: '/',
      component: Login
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/timeline',
      component: Timeline
    },
    {
      path: '/mypage',
      component: MyPage
    }
  ]
})