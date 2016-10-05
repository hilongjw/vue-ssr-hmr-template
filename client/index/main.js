import Vue from 'vue'
import VueRouter from 'vue-router'

import router from './router'
import App from './App.vue'

Vue.use(VueRouter)

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
