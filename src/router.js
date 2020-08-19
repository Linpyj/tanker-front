import Vue from 'vue';
import VueRouter from 'vue-router';
// import Top from './components/Top.vue';
// import Hage from './components/Hage.vue';
// import Hoge from './components/Hoge.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: HelloWorld },
    // { path: '/hage', component: Hage },
    // { path: '/hoge', component: Hoge },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;