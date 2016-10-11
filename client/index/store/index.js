import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    User: {
        name: '2333'
    }
}

const mutations = {
    USER_SIGN_OUT (state) {
        state.User = null
    },
    USER_SIGN_IN (state, user) {
        state.User = user
    },
}

const actions = {
    userSignOut ({ commit }) {
        commit('USER_SIGN_OUT')
    },
    userSignIn ({ commit }) {
        commit('USER_SIGN_IN', {
            name: '233'
        })
    }

}

const getters = {
    User: state => state.User
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})