import { fetchList, fetchUserInfo, fetchCommentItem } from '../api';

export default {
    async FETCH_LIST({ commit }, pageName) {
        try {
            const response = await fetchList(pageName);
            commit('SET_LIST', response.data);
            return response;
        } catch (e) {
            console.error(e);
        }
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