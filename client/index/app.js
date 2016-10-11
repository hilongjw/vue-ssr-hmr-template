import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'
import { sync } from 'vuex-router-sync'

sync(store, router)

const app = new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App)
})

export { app, router, store }
