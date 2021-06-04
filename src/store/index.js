import axios from "axios"
import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex);

//to handle state
const state = {
    posts: []
}

//to handle state
const getters = {}

//to handle actions
const actions = {
    getPosts({ commit }) {
        axios.get('https://dog.ceo/api/breed/hound/images')
        .then(response => {
            console.log(response.data)
        commit('SET_POSTS', response.data)
        })
        }
}

//to handle mutations
const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
        }
}

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})