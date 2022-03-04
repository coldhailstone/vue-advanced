import { fetchList, fetchUserInfo, fetchCommentItem } from '../api';

export default {
    FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then(response => {
                commit('SET_LIST', response.data);
                return response;
            })
            .catch(console.error);
    },
    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
            .then(({ data }) => commit('SET_USER', data))
            .catch(console.error);
    },
    FETCH_ITEM({ commit }, id) {
        return fetchCommentItem(id)
            .then(({ data }) => commit('SET_ITEM', data))
            .catch(console.error);
    }
}