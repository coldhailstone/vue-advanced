import ListView from './ListView.vue';
import bus from '../utils/bus';

export default function createListView(name) {
    return {
        name,
        created() {
            bus.$emit('start:spinner');
            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                    bus.$emit('end:spinner');
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}