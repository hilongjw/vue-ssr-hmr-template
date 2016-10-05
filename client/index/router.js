import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Entry from './views/Entry.vue'

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: Home },
        { path: '/entry', component: Entry }
    ]
})

export default router