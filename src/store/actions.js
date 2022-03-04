import { fetchNewsList, fetchAskList, fetchJobsList, fetchList, fetchUserInfo, fetchCommentItem } from '../api';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                context.commit('SET_NEWS', response.data);
                return response;
            })
            .catch(console.error);
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(response => {
                commit('SET_ASK', response.data);
                return response;
            })
            .catch(console.error);
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(response => {
                commit('SET_JOBS', response.data);
                return response;
            })
            .catch(console.error);
    },
    FETCH_LIST({ commit }, pageName) {
        fetchList(pageName)
            .then(({ data }) => commit('SET_LIST', data))
            .catch(console.error);
    },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
            .then(({ data }) => commit('SET_USER', data))
            .catch(console.error);
    },
    FETCH_ITEM({ commit }, id) {
        fetchCommentItem(id)
            .then(({ data }) => commit('SET_ITEM', data))
            .catch(console.error);
    }
}