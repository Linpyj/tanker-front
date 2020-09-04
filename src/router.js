import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Timeline from '@/views/Timeline.vue'
import MyPage from '@/views/MyPage.vue'
import ShowPost from '@/views/ShowPost.vue'
import Recommend from '@/views/Recommend.vue'
import ShowUser from '@/views/ShowUser.vue'
import Config from '@/views/Config.vue'

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
    },
    {
      path: '/showpost',
      component: ShowPost
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      name: 'showuser',
      path: '/showuser/:id',
      component: ShowUser
    },
    {
      path: '/config',
      component: Config
    }
  ]
})