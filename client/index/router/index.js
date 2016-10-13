import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = require('../views/Home.vue')
const Article = require('../views/Article.vue')
const Tag = require('../views/Tag.vue')
const Login = require('../views/Login.vue')

const router = new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'home',
        component: Home
    }, {
        path: '/article',
        name: 'article',
        component: Article
    }, {
        path: '/tag',
        name: 'tag',
        component: Tag
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }]
})

router.beforeEach((to, from, next) => {
    router.app.$store.dispatch('hideHeaderNav')
    next()
})

export default router