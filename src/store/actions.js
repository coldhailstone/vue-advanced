import { fetchNewsList, fetchAskList, fetchJobsList } from '../api';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
        .then(response => context.commit('SET_NEWS', response.data))
        .catch(console.error);
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(({ data }) => commit('SET_ASK', data))
            .catch(console.error);
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => commit('SET_JOBS', data))
            .catch(console.error);
    }
}