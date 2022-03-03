import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: []
    },
    getters: {

    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        }
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
            .then(response => context.commit('SET_NEWS', response.data))
            .catch(console.error);
        },
        FETCH_ASK(context) {
            fetchAskList()
                .then(response => context.commit('SET_ASK', response.data))
                .catch(console.error);
        },
        FETCH_JOBS({ commit }) {
            fetchJobsList()
                .then(response => commit('SET_JOBS', response.data))
                .catch(console.error);
        }
    }
});