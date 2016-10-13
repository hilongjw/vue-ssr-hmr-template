require('es6-promise').polyfill()
import { app, store } from './app'

store.replaceState(window.__INITIAL_STATE__)

app.$mount('#app')
